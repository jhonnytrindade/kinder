import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface MusicasMap {
  [codigo: number]: Musica;
}

interface Musica {
  artista: string,
  nome: string,
  inicio: string
}

interface MusicaItem{
  codigo: string,
  nome: string,
  artista: string,
  inicio: string
}

const musicas: MusicasMap = {

  15950: {
    "artista": "Claudia Leitte - Wesley Safadão",
    "nome": "PANCADÃO FRENÉTICO",
    "inicio": "Eu fui no camarote com"
  },

  16309: {
    "artista": "Fred e Gustavo - Wesley Safadão",
    "nome": "A CULPA É DA BEBIDA",
    "inicio": "Mais um fim de noite nós na mesma "
  },

  16776: {
    "artista": "Israel Novaes - Wesley Safadão",
    "nome": "LAPADA DE SAUDADE",
    "inicio": "Seis horas da "
  },

  15998: {
    "artista": "Israel Novaes - Wesley Safadão",
    "nome": "VOCÊ MERECE CACHÊ",
    "inicio": "Só faltou botar uma "
  },

  16258: {
    "artista": "Ivete Sangalo - Wesley Safadão",
    "nome": "À VONTADE",
    "inicio": "Vai começar a banda dando "
  },

  16486: {
    "artista": "Jerry Smith - Wesley Safadão",
    "nome": "QUEM TEM O DOM",
    "inicio": "Dom dom dom... Tem tem gente "
  },

  15842: {
    "artista": "Marcos e Belutti - Wesley Safadão",
    "nome": "AQUELE 1",
    "inicio": "Eu abro a porta e "
  },

  16170: {
    "artista": "Nego do Borel - Anitta - Wesley Safadão",
    "nome": "VOCÊ PARTIU MEU CORAÇÃO",
    "inicio": "Você partiu meu "
  },

  16156: {
    "artista": "Rafa e Pipo Marques-Wesley Safadão",
    "nome": "TÔ DE BOAÇA",
    "inicio": "Eu tô de boa tô "
  },

  16140: {
    "artista": "Simone e Simaria-Wesley Safadão",
    "nome": "NÃO VOU MAIS ATRÁS DE VOCÊ",
    "inicio": "Cansei de te "
  },

  16030: {
    "artista": "Victor e Léo - Wesley Safadão",
    "nome": "ESCURIDÃO ILUMINADA",
    "inicio": "Algumas luzes pra guiar nosso "
  },

  16015: {
    "artista": "Wesley Safadão",
    "nome": "A DAMA E O VAGABUNDO",
    "inicio": "A gente briga e "
  },

  16324: {
    "artista": "Wesley Safadão",
    "nome": "AR CONDICIONADO NO 15",
    "inicio": "Cinco dias uma hora dez "
  },

  15808: {
    "artista": "Wesley Safadão",
    "nome": "CAMAROTE",
    "inicio": "Como é que você "
  },

  16091: {
    "artista": "Wesley Safadão",
    "nome": "CORAÇÃO MACHUCADO",
    "inicio": "Não tô a fim de "
  },

  16583: {
    "artista": "Wesley Safadão",
    "nome": "IGUAL ELA SÓ UMA",
    "inicio": "E tá mandando esse olhinho por "
  },

  16536: {
    "artista": "Wesley Safadão",
    "nome": "O CARA ERRADO",
    "inicio": "Eu sei que você quer "
  },

  16429: {
    "artista": "Wesley Safadão",
    "nome": "SÓ PRA CASTIGAR",
    "inicio": "Caça briga à toa e adora passar "
  },

  16282: {
    "artista": "Wesley Safadão",
    "nome": "SONHEI QUE TAVA ME CASANDO",
    "inicio": "Hoje é o dia que vai mudar a minha "
  },

  16689: {
    "artista": "Wesley Safadão",
    "nome": "SOU CIUMENTO MESMO",
    "inicio": "Tá claro você não existe sem "
  },

  16361: {
    "artista": "Wesley Safadão - Aldair Playboy - MC Kevinho",
    "nome": "AMOR FALSO",
    "inicio": "Abre o jogo "
  },

  16358: {
    "artista": "Wesley Safadão - Anitta",
    "nome": "ROMANCE COM SAFADEZA",
    "inicio": "Que eu te amo muita gente "
  },

  16750: {
    "artista": "Wesley Safadão - Israel Novaes",
    "nome": "VOU DAR VIROTE",
    "inicio": "Amava alguém me "
  },

  15912: {
    "artista": "Wesley Safadão - Ivete Sangalo",
    "nome": "PARECE QUE O VENTO",
    "inicio": "Parece que o vento leva notícias de você pra "
  },

  16230: {
    "artista": "Wesley Safadão - Marília Mendonça",
    "nome": "NINGUÉM É DE FERRO",
    "inicio": "Hoje eu tenho certeza "
  },

  16190: {
    "artista": "Wesley Safadão - Matheus e Kauan",
    "nome": "MEU CORAÇÃO DEU PT",
    "inicio": "Pega meu violão um "
  },

  16296: {
    "artista": "Wesley Safadão - MC Kevinho",
    "nome": "OLHA A EXPLOSÃO",
    "inicio": "Essa novinha é "
  },

  16196: {
    "artista": "Wesley Safadão - Ronaldinho Gaúcho",
    "nome": "SOLTEIRO DE NOVO (TÔ",
    "inicio": "Eu comecei a "
  },

  16775: {
    "artista": "Wesley Safadão - Simone e Simaria",
    "nome": "JURAS DE AMOR (VAI CHORAR",
    "inicio": "Eu feito um louco fiz de tudo por "
  },

  16762: {
    "artista": "Wesley Safadão - Zé Neto e Cristiano",
    "nome": "DESPEDIDA",
    "inicio": "Eu entro no quarto e vejo sua "
  },

  16627: {
    "artista": "Wesley Safadão - Zé Neto e Cristiano",
    "nome": "NA CAMA QUE EU PAGUEI",
    "inicio": "Será que é pra "
  }
}

const removeDiacritics = (str: string) => str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const filtrarMusicas = (musica: MusicaItem, filtro: string):boolean =>
  Object.keys(musica).map(prop => musica[prop]).find(field => 
    removeDiacritics(field).includes(removeDiacritics(filtro)));
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TypeScript Greeter';
  filtroControl = new FormControl('');
  filtro = '';
  musicasList: MusicaItem[] = Object.keys(musicas).map(cod => ({ codigo: cod, nome: musicas[cod].nome, artista: musicas[cod].artista, inicio: musicas[cod].inicio }));
  musicas = this.musicasList;

  ngOnInit() {
    this.filtroControl.valueChanges.subscribe(value => {
      this.musicas = this.musicasList.filter(musica => filtrarMusicas(musica, value));
    });
  }
}