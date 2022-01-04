package com.oops.practice;
import java.io.*;
import java.util.*;


class Mobile {
	public void play(String song) {
		System.out.println("Playing " + song + " song in default app ");
	}
}

class Song {
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

interface Premium {
	boolean isPremium();
}
class Android extends Mobile implements Premium {
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


class IOS extends Mobile {
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

public class OopsDemo {
	public static void main(String[] args) {
		Android a = new Android();
		a.play("Despacito...");
		System.out.println("Default music app = " + a.getDefaultMusicApp());
		a.setDefaultMusicApp("Spotify");
		System.out.println(a.isPremium());
		System.out.println("Default music app = " + a.getDefaultMusicApp());
		IOS i = new IOS();
		i.play("Thunder");
		i.addSongToQueue(new Song("Song1", "Singer1", "Writer1"));
		i.displayQueue();
		System.out.println("Default music app = " + i.getDefaultMusicApp());
		i.setDefaultMusicApp("Spotify");
		System.out.println("Default music app = " + i.getDefaultMusicApp());
	}
}

