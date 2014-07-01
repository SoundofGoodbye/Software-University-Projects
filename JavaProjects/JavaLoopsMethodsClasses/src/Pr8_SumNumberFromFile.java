import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Pr8_SumNumberFromFile {
	public static void main(String[] args) {
		BufferedReader reader = null;
		try {
			reader = new BufferedReader(new FileReader("resources/input.txt"));	
		} catch (FileNotFoundException e) {
			System.err.println("Error");
		}
		String line = null;

		try {
			if (reader != null) {
				int sum = 0;
				while ((line = reader.readLine()) != null) {
					sum += Integer.valueOf(line);
				}
				System.out.println(sum);
			}
		} catch (IOException e) {
		}
	}
}
