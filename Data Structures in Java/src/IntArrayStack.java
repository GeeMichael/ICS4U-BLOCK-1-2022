public class IntArrayStack {
    private Integer[] list;
    private int top;

    public IntArrayStack() {
        list = new Integer[10];
        top = -1;
    }

    public void push(Integer data) {
        if (top + 1 == list.length) {
            Integer[] temp = new Integer[list.length * 2];
            for (int i = 0; i < list.length; i++){
                temp[i] = list[i];
            }
            list = temp;
        }
        list[top + 1] = data;
        top++;
    }

    public Integer pop() {
        if (top != -1) {
            Integer temp = list[top];
            list[top] = 0;
            top--;
            return temp;
        }
        return -1;
    }

    public Integer peek() {
        if (top == -1) return -1;
        return list[top];
    }

    public Integer search(Integer data) {
        if (top == -1)
            return -1;

        for (Integer i = 0; i < top; i++) {
            if (list[i] == data){
                return i;
            }
        }
        return -1;
    }

    public Boolean empty(){
        return top == -1;
    }
}
