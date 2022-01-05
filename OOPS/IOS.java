package OOPS;

import java.util.LinkedList;
import java.util.List;

public class IOS {
	private String defaultMusicApp;
	private List<Song> queue = null;
	private boolean premium;
	IOS() {
		defaultMusicApp = "iTunes";
		queue = new LinkedList<Song>();
		premium = false;
	}
	public boolean isPremium() {
		return premium;
	}
	public void play(String song) {
		System.out.println("playing " + song + " song in " + defaultMusicApp + " App");
	}

	public String getDefaultMusicApp() {
		return defaultMusicApp;
	}
	public void addSongToQueue(Song song) {
		queue.add(song);
	}

	public void addSongToQueue(Song song1, Song song2) {
		queue.add(song1);
		queue.add(song2);
	}
	public void setDefaultMusicApp(String defaultMusicApp) {
		System.out.println("Default Music app is changed from " + this.defaultMusicApp + " to " + defaultMusicApp);
		this.defaultMusicApp = defaultMusicApp;
	}

	public void displayQueue() {
		if (queue.isEmpty()) {
			System.out.println("Queue is Empty");
		} else {
			for (int i = 0; i < queue.size(); i++) {
				System.out.println(queue.get(i));
			}
		}
	}

}
