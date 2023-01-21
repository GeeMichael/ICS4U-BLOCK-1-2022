public class IntLLStack {
    private IntLinkedList list;

    public IntLLStack() {
        list = new IntLinkedList();
    }

    public void push(Integer data) {
        list.addFront(data);
    }

    public Integer pop() {
        return list.removeFront();
    }

    public Integer peek() {
        return list.getFront();
    }

    public int search(Integer data) {
        return list.find(data);
    }

    public boolean empty() {
        return list.isEmpty();
    }
}