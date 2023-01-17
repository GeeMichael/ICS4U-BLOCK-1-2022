public class IntLLStack {
    private IntLinkedList list;

    public void push(Integer data) {
        list.addFront(data);
    }

    public Integer pop() {
        return list.removeFront();
    }

    public Integer peek() {
        if (list.removeFront() == null){
            return -1;
        }
        int temp = list.removeFront();
        list.addFront(temp);
        return temp;
    }

    public Integer search(Integer data) {
        return list.find(data);
    }

    public Boolean empty() {
        return list == null;
    }
}
