public class IntBSTNode {
    private Integer data;
    private IntBSTNode leftChild;
    private IntBSTNode rightChild;

    public IntBSTNode(Integer data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }

    public IntBSTNode(Integer data, IntBSTNode leftChild, IntBSTNode rightChild) {
        this.data = data;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }

    public Integer getData() {
        return data;
    }

    public void setData(Integer data) {
        this.data = data;
    }

    public IntBSTNode getLeftChild() {
        return leftChild;
    }

    public void setLeftChild(IntBSTNode leftChild) {
        this.leftChild = leftChild;
    }

    public IntBSTNode getRightChild() {
        return rightChild;
    }

    public void setRightChild(IntBSTNode rightChild) {
        this.rightChild = rightChild;
    }

    public Boolean hasLeftChild() {
        return leftChild != null;
    }

    public Boolean hasRightChild() {
        return rightChild != null;
    }
}
