public class IntLinkedList {
    private IntNode head; // front of the linked list
    private int manyItems;

    public IntLinkedList() {
        this.head = null;
        this.manyItems = 0;
    }

    public boolean add(Integer data) { // add data to end of linked list
        IntNode temp = new IntNode(data);
        if (head == null)
            head = temp;
        else {
            IntNode curr = head; // current node (index)
            while(curr.getLink() != null){
                curr = curr.getLink();
            }
            curr.setLink(temp);
            manyItems++;
        }
        return true;
    }

    public boolean addFront(Integer data) { // add data to beginning of linked list
        head = new IntNode(data, head);
        manyItems++;
        return true;
    }

    public boolean add(int index, Integer data) {
        if (index > manyItems)
            throw new IndexOutOfBoundsException("Index " + index + " is not allowed. Max index value is " + manyItems);
        
        if (index == 0)
            addFront(data);
        else {
            IntNode curr = head;
            for (int i = 0; i < index - 1; i++){
                curr = curr.getLink();      
            }
            curr.setLink(new IntNode(data, curr.getLink()));
        }
        return true;
    }

    public Integer remove(Integer data) { // removes first instance of data in linked list
        if (head != null && head.getData() == data){
            head = head.getLink();
            return data;
        }
        
        IntNode curr = head;
        while(curr.getLink() != null && curr.getLink().getData() != data) { // if next element is data
            curr = curr.getLink();
        }
        if (curr.getLink() != null){ 
            curr.setLink(curr.getLink().getLink());
            return data;
        } else {
            return null;
        }
    }

    public boolean isEmpty(){
        return head == null;
    }

    public int size() {
        return manyItems;
    }
}
