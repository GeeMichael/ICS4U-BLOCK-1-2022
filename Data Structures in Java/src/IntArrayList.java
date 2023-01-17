public class IntArrayList {
    private final int ARRAY_LENGTH = 10;

    private Integer[] list;
    private int top;
    private int length;

    public IntArrayList() {
        list = new Integer[ARRAY_LENGTH];
        top = 0;
        length = ARRAY_LENGTH;
    }

    public Integer search(Integer data) { // searches for first instance of data
        if (top == 0) // if list is null
            return -1;

        for (Integer i = 0; i < top; i++) { // iterate through array
            if (list[i] == data){
                return i;
            }
        }
        return -1;
    }

    public void add(int index, Integer data) { // adds data at index
        checkLength();
        if (index - top < 0 && index < 0)
            throw new IllegalArgumentException("Invalid index");
        for (int i = top; i >= top - index; i--) {
            list[i + 1] = list[i];
        }
        list[top - index] = data;
        top++;
    }

    public void add(Integer data) { // adds to end
        add(0, data);        
    }

    public void addFront(Integer data) { // adds at start
        add(top, data);
    }

    public Integer get(int index) { // gets int at index
        if (index < 0 || index >= top)
            throw new IndexOutOfBoundsException("Invalid index");
        return list[index];
    }

    public int size() { // return top
        return top;
    }

    public Integer remove(Integer data) { // removes first instance of data
        boolean found = false;
        for (int i = 0; i < top; i++) {
            while (!found) {
                if (list[i] == data) {
                    found = true;
                    top--;
                }
            }
            if (found) {
                list[i] = list[i + 1];
                return data;
            }
        }
        return null;
    }

    public Integer removeFront() { // removes front element
        Integer temp = get(0);
        remove(temp);
        return list[top];
    }

    public Integer getFront() { // gets front element
        return list[top];
    }

    public Boolean isEmpty() { // checks if empty
        return top == 0;
    }

    private void checkLength() {
        if (top + 1 >= length) {
            length *= 2;
            Integer[] temp = new Integer[length];
            for (int i = 0; i < list.length; i++) {
                temp[i] = list[i];
            }
            list = temp;
        }
    }
}