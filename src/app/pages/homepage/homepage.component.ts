import { Component } from '@angular/core';

interface Song {
  title: string;
  link: string;
  isFavorite?: boolean; // Nuova proprietà per i preferiti
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  songs: Song[] = [
    { title: 'Amazing Grace', link: 'https://example.com/amazing-grace', isFavorite: false },
    { title: 'Battle Belongs', link: 'https://example.com/battle-belongs', isFavorite: false },
    { title: 'Blessed Assurance', link: 'https://example.com/blessed-assurance', isFavorite: false },
    { title: '10,000 Reasons', link: 'https://example.com/10000-reasons', isFavorite: false },
    { title: 'Crown Him with Many Crowns', link: 'https://example.com/crown-him-with-many-crowns', isFavorite: false },
    { title: 'Draw Me Close to You', link: 'https://example.com/draw-me-close-to-you', isFavorite: false },
    { title: 'Everlasting God', link: 'https://example.com/everlasting-god', isFavorite: false },
    { title: 'Good Good Father', link: 'https://example.com/good-good-father', isFavorite: false },
    { title: 'Great Are You Lord', link: 'https://example.com/great-are-you-lord', isFavorite: false },
    { title: 'Holy Spirit', link: 'https://example.com/holy-spirit', isFavorite: false },
    { title: 'I Surrender All', link: 'https://example.com/i-surrender-all', isFavorite: false },
    { title: 'Jesus Paid It All', link: 'https://example.com/jesus-paid-it-all', isFavorite: false },
    { title: 'King of My Heart', link: 'https://example.com/king-of-my-heart', isFavorite: false },
    { title: 'Let It Be', link: 'https://example.com/let-it-be', isFavorite: false },
    { title: 'Mighty to Save', link: 'https://example.com/mighty-to-save', isFavorite: false },
    { title: 'Nothing But the Blood', link: 'https://example.com/nothing-but-the-blood', isFavorite: false },
    { title: 'Oceans (Where Feet May Fail)', link: 'https://example.com/oceans', isFavorite: false },
    { title: 'Praise You In This Storm', link: 'https://example.com/praise-you-in-this-storm', isFavorite: false },
    { title: 'Quench This Thirst', link: 'https://example.com/quench-this-thirst', isFavorite: false },
    { title: 'Reckless Love', link: 'https://example.com/reckless-love', isFavorite: false },
    { title: 'Shout to the Lord', link: 'https://example.com/shout-to-the-lord', isFavorite: false },
    { title: 'This Is Amazing Grace', link: 'https://example.com/this-is-amazing-grace', isFavorite: false },
    { title: 'Unstoppable God', link: 'https://example.com/unstoppable-god', isFavorite: false },
    { title: 'Victory in Jesus', link: 'https://example.com/victory-in-jesus', isFavorite: false },
    { title: 'What a Beautiful Name', link: 'https://example.com/what-a-beautiful-name', isFavorite: false },
    { title: 'You Are My King (Amazing Love)', link: 'https://example.com/you-are-my-king', isFavorite: false },
    { title: 'Your Grace Is Enough', link: 'https://example.com/your-grace-is-enough', isFavorite: false },
    { title: 'Zion', link: 'https://example.com/zion', isFavorite: false },
    { title: 'Let There Be Light', link: 'https://example.com/let-there-be-light', isFavorite: false },
    { title: 'Faithful One', link: 'https://example.com/faithful-one', isFavorite: false },
    { title: 'Holy Is the Lord', link: 'https://example.com/holy-is-the-lord', isFavorite: false },
    { title: 'Graves into Gardens', link: 'https://example.com/graves-into-gardens', isFavorite: false },
  ];

  searchTerm: string = '';
  selectedLetter: string = '';
  showFavorites: boolean = false;

  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  ngOnInit() {
    this.loadFavorites();
  }
  
  get filteredSongs() {
    let filtered = this.songs;

    // Filtro per lettera
    if (this.selectedLetter) {
      filtered = filtered.filter(song =>
        song.title.toUpperCase().startsWith(this.selectedLetter)
      );
    }

    // Filtro per ricerca
    if (this.searchTerm) {
      filtered = filtered.filter(song =>
        song.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    return filtered;
  }

  get displayedSongs() {
    return this.showFavorites ? this.songs.filter(song => song.isFavorite) : this.filteredSongs;
  }

  // Aggiunge o rimuove un brano dai preferiti
  toggleFavorite(song: Song) {
    song.isFavorite = !song.isFavorite;
    this.saveFavorites();
  }

  // Salva i preferiti nel local storage
  saveFavorites() {
    const favorites = this.songs
      .filter(song => song.isFavorite)
      .map(song => song.title);  // Salva solo i titoli dei brani preferiti
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  // Carica i preferiti dal local storage
  loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.songs.forEach(song => {
      song.isFavorite = favorites.includes(song.title);
    });
  }

  clearSearch() {
    this.searchTerm = '';
    this.selectedLetter = '';
  }

  filterByLetter(letter: string) {
    this.selectedLetter = letter;
  }
}
