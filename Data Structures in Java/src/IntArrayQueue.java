public class IntArrayQueue {
    private Integer[] list;
    private int top;

    public IntArrayQueue() { // creates new arraylist length 10, top = -1
        list = new Integer[10];
        top = -1;
    }

    public boolean isEmpty() { // checks if top is -1
        return top == -1;
    }

    public void clear() { // makes new arraylist length 10
        list = new Integer[10];
    }

    public boolean enqueue(Integer data) {
        if (top + 1 == list.length) { // checks if top exceeds arraylist length
            Integer[] temp = new Integer[list.length * 2]; // creates new arraylist double length
            for (int i = 0; i < list.length; i++) { // puts every element into new arraylist
                temp[i] = list[i];
            }
            list = temp;
        }
        list[top + 1] = data; // sets top + 1 to new number
        top++;
        return true;
    }

    public Integer dequeue() { // removes first element
        Integer[] temp = new Integer[list.length];
        Integer a = list[0];
        for (int i = 1; i < list.length; i++) {
            temp[i - 1] = list[i]; // sets position i - 1 to index i
        }
        top--;
        list = temp;
        return a;
    }

    public Integer peek() { // returns first element
        return list[0];
    }
}