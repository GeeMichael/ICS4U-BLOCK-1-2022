public class IntBST {
    private IntBSTNode root;

    public IntBST() {
        this.root = null;
    }

    public IntBSTNode add(Integer data) {
        return add(root, data);
    }

    /**
     * No duplicate values!
     * @param root root of subtree we are adding data to
     * @param data value we are adding
     * @return reference to IntBSTNode we inserted into
     */
    private IntBSTNode add(IntBSTNode root, Integer data) { 
        if (data < root.getData()){
            if(root.hasLeftChild()) return add(root.getLeftChild(), data);
            IntBSTNode child = new IntBSTNode(data);
            root.setLeftChild(child);
            return child;
        } else if (data > root.getData()){
            if(root.hasRightChild()) return add(root.getRightChild(), data);
            IntBSTNode child = new IntBSTNode(data);
            root.setRightChild(child);
            return child;
        }
        return root;
    }
}
