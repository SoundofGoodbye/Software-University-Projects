import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Problem 8. Extract Emails Write a program to extract all email addresses from
 * given text. The text comes at the first input line. Print the emails in the
 * output, each at a separate line. Emails are considered to be in format
 * <user>@<host>, where: • <user> is a sequence of letters and digits, where
 * '.', '-' and '_' can appear between them. Examples of valid users: "stephan",
 * "mike03", "s.johnson", "st_steward", "softuni-bulgaria", "12345". Examples of
 * invalid users: ''--123", ".....", "nakov_-", "_steve", ".info". • <host> is a
 * sequence of at least two words, separated by dots '.'. Each word is sequence
 * of letters and can have hyphens '-' between the letters. Examples of hosts:
 * "softuni.bg", "software-university.com", "intoprogramming.info",
 * "mail.softuni.org". Examples of invalid hosts: "helloworld",
 * ".unknown.soft.", "invalid-host-", "invalid-".
 *
 * @author Marto
 *
 */
public class Pr8_ExtractEmails {
	private static final String EMAIL_PATTERN = "[\\w-+]+(?:\\.[\\w-+]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7}";

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter sentece to extract email from.");
		String input = scanner.nextLine().toLowerCase();

		Pattern emailPattern = Pattern.compile(EMAIL_PATTERN);
		Matcher matcher = emailPattern.matcher(input);

		while (matcher.find()) {
			System.out.println(matcher.group());
		}
		scanner.close();
	}
}
