import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * Problem 9. Combine Lists of Letters Write a program that reads two lists of
 * letters l1 and l2 and combines them: appends all letters c from l2 to the end
 * of l1, but only when c does not appear in l1. Print the obtained combined
 * list. All lists are given as sequence of letters separated by a single space,
 * each at a separate line. Use ArrayList<Character> of chars to keep the input
 * and output lists.
 *
 * @author Marto
 *
 */
public class Pr9_CombineListOfLetters {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		List<Character> firstLineList = new ArrayList<Character>();
		char[] firstLineAsCharArray = scanner.nextLine().toCharArray();
		for (char currentChar : firstLineAsCharArray) {
			firstLineList.add(currentChar);
		}

		List<Character> secondLineList = new ArrayList<Character>();
		char[] secondLineAsCharArray = scanner.nextLine().toCharArray();
		for (char currentChar : secondLineAsCharArray) {
			secondLineList.add(currentChar);
		}

		List<Character> resultList = new ArrayList<Character>();
		resultList.addAll(firstLineList);

		for (int i = 0; i < secondLineList.size(); i++) {
			if (firstLineList.contains(secondLineList.get(i))) {
				continue;
			} else {
				resultList.add(' ');
				resultList.add(secondLineList.get(i));
			}
		}

		for (char currectChar : resultList) {
			System.out.print(currectChar);
		}
		scanner.close();
	}
}
