public class IntNode {
    // A linked list node needs two things; data and link
    private Integer data; // stored data in each node
    private IntNode link; // link to next node
    
    public IntNode(Integer data) {
        this.data = data;
        this.link = null;
    }

    public IntNode(Integer data, IntNode link) {
        this.data = data;
        this.link = link;
    }

    public Integer getData() {
        return data;
    }

    public void setData(Integer data) {
        this.data = data;
    }

    public IntNode getLink() {
        return link;
    }

    public void setLink(IntNode link) {
        this.link = link;
    }
}