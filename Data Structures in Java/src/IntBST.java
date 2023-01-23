public class IntBST {
    private IntBSTNode root;

    public IntBST() {
        this.root = null;
    }

    public IntBSTNode add(Integer data) {
        if (root == null){
            root = new IntBSTNode(data);
            return root;
        }
        return add(root, data);
    }

    /**
     * No duplicate Datas!
     * @param root root of subtree we are adding data to
     * @param data Data we are adding
     * @return reference to IntBSTNode we inserted into
     */
    private IntBSTNode add(IntBSTNode root, Integer data) { 
        if (data < root.getData()){
            if (root.hasLeftChild()) return add(root.getLeftChild(), data);
            IntBSTNode child = new IntBSTNode(data);
            root.setLeftChild(child);
            return child;
        } else if (data > root.getData()){
            if (root.hasRightChild()) return add(root.getRightChild(), data);
            IntBSTNode child = new IntBSTNode(data);
            root.setRightChild(child);
            return child;
        }
        return root;
    }

    private IntBSTNode find(Integer data) {
        return find(root, data);
    }

    /**
     * Only one of each Data possible
     * @param root root of subtree we are checking
     * @param data Data we are finding
     * @return reference to IntBSTNode if found, null if not found
     */
    private IntBSTNode find(IntBSTNode root, Integer data) {
        if (data == root.getData()) return root;
        else if (data < root.getData() && root.hasLeftChild())
            return find(root.getLeftChild(), data);
        else if (data > root.getData() && root.hasRightChild())
            return find(root.getRightChild(), data);
        return null;
    }

    public void preOrder() {
        preOrder(root);
    }

    public String preOrderPrintTraversal() {
        String result = "";
        result += preOrderPrintTraversal(root, result);
        return result;
    }

    private String preOrderPrintTraversal(IntBSTNode root, String result) {
        result += " " + root.getData();
        if (root.hasLeftChild()) result = preOrderPrintTraversal(root.getLeftChild(), result);
        if (root.hasRightChild()) result = preOrderPrintTraversal(root.getRightChild(), result);
        return result;
    }

    private void preOrder(IntBSTNode root) {
        System.out.println(root.getData());
        if (root.hasLeftChild()) preOrder(root.getLeftChild());
        if (root.hasRightChild()) preOrder(root.getRightChild());
    }

    public void postOrder() {
        postOrder(root);   
    }

    public String postOrderPrintTraversal() {
        String result = "";
        result += postOrderPrintTraversal(root, result);
        return result;
    }

    private String postOrderPrintTraversal(IntBSTNode root, String result) {
        if (root.hasLeftChild()) result = postOrderPrintTraversal(root.getLeftChild(), result);
        if (root.hasRightChild()) result = postOrderPrintTraversal(root.getRightChild(), result);
        result += " " + root.getData();
        return result;
    }

    private void postOrder(IntBSTNode root) {
        if (root.hasLeftChild()) postOrder(root.getLeftChild());
        if (root.hasRightChild()) postOrder(root.getRightChild());
        System.out.println(root.getData());
    }

    private IntBSTNode findLargest(IntBSTNode root) {
        if (root.hasRightChild() && root.getRightChild().hasRightChild())
            findLargest(root.getRightChild());
        else if (root.hasRightChild())
            return root.getRightChild();
        return root;
    }

    public void inOrder() {
        inOrder(root);
    }

    private void inOrder(IntBSTNode root) {
        if (root.hasLeftChild()) inOrder(root.getLeftChild());
        System.out.println(root.getData());
        if (root.hasRightChild()) inOrder(root.getRightChild());
    }

    public String inOrderPrintTraversal() {
        String result = "";
        result += inOrderPrintTraversal(root, result);
        return result;
    }

    private String inOrderPrintTraversal(IntBSTNode root, String result) {
        if (root.hasLeftChild())
            result = inOrderPrintTraversal(root.getLeftChild(), result);

        result += " " + root.getData();

        if (root.hasRightChild())
            result = inOrderPrintTraversal(root.getRightChild(), result);

        return result;
    }

    private Integer findSmallest(IntBSTNode root) {
        if (root.hasLeftChild() && root.getLeftChild().hasLeftChild())
            findSmallest(root.getLeftChild());
        else if (root.hasLeftChild())
            return root.getLeftChild().getData();
        return root.getData();
    }

    // removes root node of binary search tree
    public void remove(Integer val) {
        root = remove(root, val);
     }

    //  recursive remove method
    private IntBSTNode remove(IntBSTNode root, Integer data) {
        if (root == null)
           return root;
  
        if (data < root.getData())
            root.setLeftChild(remove(root.getLeftChild(), data));
        else if (data > root.getData())
            root.setRightChild(remove(root.getRightChild(), data));
        else {
            if (root.getLeftChild() == null)
                return root.getRightChild();
            else if (root.getRightChild() == null)
                return root.getLeftChild();
            else {
              Integer biggest = findSmallest(root.getRightChild());
              root.setData(biggest);
              root.setRightChild(remove(root.getRightChild(), root.getData()));
           }
        }
        return root;
     }
}