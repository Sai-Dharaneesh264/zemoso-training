package OOPS;

public class OopsDemo {
	public static void main(String[] args) {
		Android a = new Android();
		a.play("Despacito...");
		System.out.println("Default music app = " + a.getDefaultMusicApp());
		a.setDefaultMusicApp("Spotify");
		System.out.println(a.isPremium());
		System.out.println("Default music app = " + a.getDefaultMusicApp());
		IOS i = new IOS();
		i.play("Blue Eyes");
		i.addSongToQueue(new Song("Song1", "Singer1", "Writer1"));
		i.displayQueue();
		System.out.println("Default music app = " + i.getDefaultMusicApp());
		i.setDefaultMusicApp("Spotify");
		System.out.println("Default music app = " + i.getDefaultMusicApp());
	}
}

