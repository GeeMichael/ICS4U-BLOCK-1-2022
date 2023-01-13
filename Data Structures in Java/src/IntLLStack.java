public class IntLLStack {
    private IntLinkedList list;

    public void push(Integer data) {
        list.addFront(data);
    }

    public void pop() {
        list.removeFront();
    }

    public Integer peek() {
        return list.removeFront();
    }

    public Integer search(Integer data) {
        return list.find(data);
    }

    public Boolean empty() {
        return list == null;
    }
}
