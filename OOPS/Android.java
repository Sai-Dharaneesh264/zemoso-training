package OOPS;

import java.util.LinkedList;
import java.util.List;

public class Android {
	private String defaultMusicApp;
	private boolean premium; 
	private List<Song> queue = null;
	Android() {
		defaultMusicApp = "Wynk";
		premium = false;
		queue = new LinkedList<Song>();
	}
	public boolean isPremium() {
		return premium;
	}
	public void play(String song) {
		System.out.println("playing " + song + " song in " + defaultMusicApp + " App");
	}

	public void addSongToQueue(Song song) {
		queue.add(song);
	}

	public void addSongToQueue(Song song1, Song song2) {
		queue.add(song1);
		queue.add(song2);
	}

	public String getDefaultMusicApp() {
		return defaultMusicApp;
	}
	public void setDefaultMusicApp(String defaultMusicApp) {
		System.out.println("Default Music app is changed from " + this.defaultMusicApp + " to " + defaultMusicApp);
		this.defaultMusicApp = defaultMusicApp;
	}

}
