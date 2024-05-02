import scala.annotation.tailrec
import javax.net.ssl.TrustManager

object Main {

  def main(args: Array[String]): Unit = {
    println("-- Programming Paradigms Exercise3 task3. --")
    println(filterGreaterThanBase(Array(5, 21, 17, 4, 10, 15), 12, Array.empty[Int]).mkString(", "))
    println(isDaffodil(153, 153, 0))
    println(countLetters("aadabcbbbcc", Map.empty[Char, Int]))
  }

  @tailrec
  def filterGreaterThanBase(arr: Array[Int], base: Int, accumulator: Array[Int]): Array[Int] = {
    if (arr.isEmpty) {
        accumulator
    } else {
        val head = arr.head
        val newAccumulator = if (head > base) accumulator :+ head else accumulator
        filterGreaterThanBase(arr.tail, base, newAccumulator)
    }
  }

  @tailrec
  def isDaffodil(n: Int, org: Int, sum: Int): Boolean = {
    require(n >= 0 && n < 1000, "Input must be a non-negative integer less than 1000")
    if (n == 0) {
      // Check if the sum of the digits raised to the number of digits (calculated from sum) equals the original number
      return sum == org
    } else {
      val digit = n % 10
      // Add the current digit raised to the number of digits to the sum
      isDaffodil(n / 10, org, sum + (digit * digit * digit))
    }
  }


  @tailrec
  def countLetters(str: String, counts: Map[Char, Int]): Map[Char, Int] = {
    if (str.isEmpty) {
    counts
  } else {
    val char = str.head
    val newCount = counts.getOrElse(char, 0) + 1
    countLetters(str.tail, counts.updated(char, newCount))
  }
  }
}