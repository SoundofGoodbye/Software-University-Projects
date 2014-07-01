import java.io.InputStreamReader;

import java.util.ArrayList;

import java.util.Collections;

import java.util.List;

import java.util.Scanner;

/**
 * 
 * Problem 8. * Sort Array of Strings Write a program that enters from the
 * 
 * console number n and n strings, then sorts them alphabetically and prints
 * 
 * them. Note: you might need to learn how to use loops and arrays in Java
 * 
 * (search in Internet).
 * 
 * 
 * 
 * @author
 * 
 * 
 */

public class SortArray {
	public static void main(String[] args) {

		System.out.println("Enter a number: ");

		Scanner scanner = new Scanner(new InputStreamReader(System.in));

		try {
			int n = scanner.nextInt();

			List<String> stringList = new ArrayList<String>();

			for (int i = 0; i < n; i++) {

				System.out.println("Enter string: " + i);

				stringList.add(scanner.next());
			}

			Collections.sort(stringList);

			for (String currentString : stringList) {

				System.out.println(currentString);
			}
		} finally {

			scanner.close();
		}
	}
}