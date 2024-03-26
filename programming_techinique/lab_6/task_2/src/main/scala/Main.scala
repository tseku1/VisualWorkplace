import scala.annotation.tailrec

object Main {

  def main(args: Array[String]): Unit = {
    println("-- Programming Paradigms Exercise3 task3. --")
    println(filterGreaterThanBase(Array(5, 21, 17, 4, 10, 15), 12, Array.empty[Int]).mkString(", "))
    println(isDaffodil(200, 0))
    println(countLetters("aadabcbbbcc", Map.empty[Char, Int]))
  }

  /** Function 1 : filterGreaterThanBase
  *
  * Write a recursive function that can check whether the integers in an array 
  * is greater than the base integer, and print the 'GreaterThanBase' integers.
  */
  @tailrec
  def filterGreaterThanBase(arr: Array[Int], base: Int, accumulator: Array[Int]): Array[Int] = {
    // TODO: implement

  }

    /** Function 2 : isDaffodil
  *
  * Write a recursive function that can check whether an integer is a Narcissistic integer.
  * Here, the given integer should be a non-negative integer less than 1000.
  */

  @tailrec
  def isDaffodil(n: Int, sum: Int): Boolean = {
    require(n >= 0 && n < 1000, "Input must be a non-negative integer less than 1000")
    // TODO: implement
    
  }

  /** Function 3 : countLetters
  *
  * Write a recursive function that can count how many times each letter occurs in a specific string.
  */

  @tailrec
  def countLetters(str: String, counts: Map[Char, Int]): Map[Char, Int] = {
    // TODO: implement

  }

}
