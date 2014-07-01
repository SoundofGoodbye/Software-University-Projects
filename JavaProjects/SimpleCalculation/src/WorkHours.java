import java.util.Scanner;

public class WorkHours {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		int h = scanner.nextInt();
		double d = scanner.nextDouble();
		double p = scanner.nextDouble();

		int hoursPerDay = 12;

		double workDays = d - d / 10;

		double workHours = workDays * hoursPerDay;

		int effWork = (int) (workHours * (p / 100));

		int difference = effWork - h;

		if (difference >= 0) {
			System.out.println("Yes");
		} else {
			System.out.println("No");
		}

		System.out.println(difference);
	}
}
