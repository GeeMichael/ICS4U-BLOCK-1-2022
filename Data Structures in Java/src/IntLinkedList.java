public class IntLinkedList {
    private IntNode head; // front of the linked list
    private int manyItems;

    public IntLinkedList() {
        this.head = null;
        this.manyItems = 0;
    }

    public boolean add(Integer data) { // add data to end of linked list
        IntNode temp = new IntNode(data);
        if (head == null) {
            head = temp;
            manyItems++;
        } else {
            IntNode curr = head; // current node (index)
            while(curr.getLink() != null){
                curr = curr.getLink();
            }
            curr.setLink(temp);
            manyItems++;
        }
        return true;
    }

    public Integer find(Integer data){
        if (head == null)
            return -1;

        if (head.getData() == data)
            return 0;
        else {
            IntNode curr = head;
            for (Integer i = 0; i < manyItems; i++){
                curr = curr.getLink();
                if (curr.getData() == data)
                    return i;
            }
        }
        return -1;
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
            manyItems++;
        }
        return true;
    }

    public Integer remove(Integer data) { // removes first instance of data in linked list
        if (head == null)
            return null;
        
        if (head != null && head.getData() == data){
            head = head.getLink();
            manyItems--;
            return data;
        }
        
        IntNode curr = head;
        while(curr.getLink() != null && curr.getLink().getData() != data) { // if next element is data
            curr = curr.getLink();
        }
        if (curr.getLink() != null){ 
            curr.setLink(curr.getLink().getLink());
            manyItems--;
            return data;
        } else {
            return null;
        }
    }

    public Integer removeFront() {
        if (head == null)
            return null;
        else {
            Integer temp = head.getData();
            head = head.getLink();
            manyItems--;
            return temp;
        }
    }

    public boolean isEmpty(){
        return head == null;
    }

    public int size() {
        return manyItems;
    }

    public String toString() {
        IntNode curr = head;
        String list = "{";

        while(curr != null) {
            list += curr.getData() + ", ";
            curr = curr.getLink();
        }
        if (!isEmpty())
            list = list.substring(0, list.length() - 2);
        

        list += "}";
        return list;
    }

}
