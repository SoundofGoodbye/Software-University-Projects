import java.util.Scanner;

/**
 * Write a program to check whether a point is inside or outside the house
 * below. The point is given as a pair of floating-point numbers, separated by a
 * space. Your program should print "Inside" or "Outside".
 * 
 * @author Marto
 * 
 */
public class PointsInsideHouse {
	public static void main(String[] args) {
		System.out.println("Enter points separated by space");

		Scanner scanner = new Scanner(System.in);

		String input = scanner.nextLine();
		String[] points = input.split(" ");

		float x = Float.valueOf(points[0]);
		float y = Float.valueOf(points[1]);

		if (isInside(x, y)) {
			System.out.println("Inside");
		} else {
			System.out.println("Outside");
		}
	}

	/**
	 * Check whether the given coordinates are inside the building.
	 * 
	 * @param x
	 *            - the x coordinate for the X-axis
	 * @param y
	 *            - the y coordinate for the Y-axis
	 * @return
	 */
	private static boolean isInside(float x, float y) {
		boolean isInside = false;

		if (isInRoof(x, y)) {
			isInside = true;
		} else if (isInSquare(x, y)) {
			isInside = true;
		} else if (isInRectangle(x, y)) {
			isInside = true;
		}
		return isInside;
	}

	private static boolean isInRectangle(float x, float y) {
		boolean isInRectangle = false;
		if (x >= 20 && x <= 22.5) {
			if (y >= 8.5 && y <= 13.5) {
				isInRectangle = true;
			}
		}
		return isInRectangle;
	}

	private static boolean isInSquare(float x, float y) {
		boolean isInSquare = false;

		if (x >= 12.5 && x <= 17.5) {
			if (y >= 8.5 && y <= 13.5) {
				isInSquare = true;
			}
		}
		return isInSquare;
	}

	private static boolean isInRoof(float x, float y) {
		boolean isInRoof = false;

		double x1 = 12.5, y1 = 8.5;
		double x2 = 17.5, y2 = 3.5;
		double x3 = 22.5, y3 = 8.5;
		double abc = Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
		double abp = Math.abs(x1 * (y2 - y) + x2 * (y - y1) + x * (y1 - y2));
		double apc = Math.abs(x1 * (y - y3) + x * (y3 - y1) + x3 * (y1 - y));
		double pbc = Math.abs(x * (y2 - y3) + x2 * (y3 - y) + x3 * (y - y2));

		if (abp + apc + pbc == abc) {
			isInRoof = true;
		}
		return isInRoof;
	}
}
