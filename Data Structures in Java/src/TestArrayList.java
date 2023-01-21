public class TestArrayList {
   public static void main(String[] args) {
      int testPassed = 0;
      int testFailed = 0;
      if (!testAddNodes()) {
         System.out.println("Test Failed: testAddNodes");
         testFailed++;
      } else {
         testPassed++;
      }

      if (!testRemoveNodes()) {
         System.out.println("Test Failed: testRemoveNodes");
         testFailed++;
      } else {
         testPassed++;
      }

      if (!testGetNodes()) {
         System.out.println("Test Failed: testGetNodes");
         testFailed++;
      } else {
         testPassed++;
      }

      System.out.println("Tests Passed: " + testPassed + ". Tests Failed: " + testFailed);
   }

   private static IntArrayList getArray() {
      IntArrayList list = new IntArrayList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);
      list.add(5);

      return list;
   }

   private static boolean testGetNodes() {
      IntArrayList list = getArray();

      Integer temp = list.get(0);
      if (temp != 1)
         return false;

      temp = list.get(list.size() - 1);
      if (temp != 5)
         return false;

      temp = list.get(2);
      if (temp != 3)
         return false;

      try {
         temp = list.get(-1);
         return false;
      } catch (Exception ex) {

      }

      try {
         temp = list.get(20);
         return false;
      } catch (IndexOutOfBoundsException ex) {

      }

      return true;

   }

   private static boolean testRemoveNodes() {
      IntArrayList list = new IntArrayList();
      Integer temp = list.remove(6);
      if (temp != null)
         return false;

      list = getArray();
      if (list.size() != 5 || list.get(0) != 1 || list.get(4) != 5)
         return false;

      temp = list.remove(3);
      if (temp != 3 || list.size() != 4)
         return false;

      temp = list.remove(1);
      if (temp != 1 || list.size() != 3)
         return false;

      temp = list.remove(5);
      if (temp != 5 || list.size() != 2)
         return false;

      temp = list.remove(23);
      if (temp != null || list.size() != 2)
         return false;

      list = getArray();

      temp = list.removeFront();
      if (temp != 1 || list.size() != 4)
         return false;

      return true;
   }

   private static boolean testAddNodes() {
      IntArrayList list = getArray();

      list.add(6);
      if (list.get(5) != 6 || list.size() != 6)
         return false;

      list.addFront(4);
      list.addFront(5);

      if (list.get(0) != 5 || list.get(1) != 4 || list.size() != 8)
         return false;

      list.add(1, 6);
      if (list.get(0) != 5 || list.get(1) != 6 || list.size() != 9)
         return false;

      list.add(0, 7);
      if (list.get(0) != 7 || list.get(1) != 5 || list.size() != 10)
         return false;

      list.add(list.size(), 8);
      if (list.get(list.size() - 1) != 8 || list.size() != 11)
         return false;

      return true;
   }
}