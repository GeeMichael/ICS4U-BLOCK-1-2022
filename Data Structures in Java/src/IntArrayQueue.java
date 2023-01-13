public class IntArrayQueue {
    private Integer[] list;
    private int top;

    public IntArrayQueue() {
        list = new Integer[10];
        top = -1;
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public void clear() {
        list = new Integer[10];
    }

    public boolean enqueue(Integer el) {
        if (top + 1 == list.length) {
            Integer[] temp = new Integer[list.length * 2];
            for (int i = 0; i < list.length; i++) {
                temp[i] = list[i];
            }
            list = temp;
        }
        list[top + 1] = data;
        top++;
        return true;
    }

    // public Integer dequeue() {
    //     return data.removeFront();
    // }

    // public Integer peek() {
    //     return data.get(0);
    // }
}
