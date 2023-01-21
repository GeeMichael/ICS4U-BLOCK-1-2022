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
            while (curr.getLink() != null) // checks end of list
                curr = curr.getLink();

            curr.setLink(temp);
            manyItems++;
        }
        return true;
    }

    public int find(Integer data) { // first instance of data in list
        int index = 0;

        IntNode temp = head;
        while(temp != null) {
            if (data == temp.getData()) return index;
            index++;
            temp = temp.getLink();
        }

        return -1;
    }

    public boolean addFront(int data) { // add data to beginning of linked list
        IntNode temp = new IntNode(data); // creates new head
        if (head == null) 
            head = temp;
        else 
            head = new IntNode(data, head);

        manyItems++;
        return true;
     }

    public boolean add(int index, int data) { // add data at index
        if (index > manyItems)
            throw new IndexOutOfBoundsException("Index " + index + " is not allowed. Max index value is " + manyItems);
        
        if (index == 0)
            addFront(data);
        else {
            IntNode curr = head;
            for (int i = 0; i < index - 1; i++)
                curr = curr.getLink();      

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
        while(curr.getLink() != null && curr.getLink().getData() != data) // if next element is data
            curr = curr.getLink();
        
        if (curr.getLink() != null){ 
            curr.setLink(curr.getLink().getLink());
            manyItems--;
            return data;
        } else 
            return null;
    }

    public Integer removeFront() {
        if (head == null)
            return -1;
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

    public Integer get(int index) {
        if (head == null)
            throw new IllegalStateException("Can't get an element from an empty list.");
        else if (index < 0)
            throw new IndexOutOfBoundsException("Invalid index " + index + ". Min index is 0");
        else if (index > size())
            throw new IndexOutOfBoundsException("Invalid index " + index + ". Max index is " + (size()-1));

        IntNode curr = head;
        for (int i = 0; i < index; i++)
            curr = curr.getLink();

        return curr.getData();        
    }

    public Integer getFront() {
        if (head == null)
            throw new IllegalStateException("Can't get an element from an empty list.");
        
        return head.getData();
    }
}