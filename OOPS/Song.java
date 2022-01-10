package OOPS;

public class Song {
	String name;
	String singer;
	String writer;

	Song (String name, String singer, String writer) {
		this.name = name;
		this.singer = singer;
		this.writer = writer;
	}
	public String toString() {
		return "name = " + name + "\nsinger = " + singer + "\nwriter = " + writer;
	}
}
