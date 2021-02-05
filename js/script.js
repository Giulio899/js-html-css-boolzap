var app = new Vue({
  el: '#app',
  data: {
    // array di oggetti
    searchInput: '',
    userSelected: 0,
    contatti:
    [
      // oggetto 1
      {
        name: 'Alessandro',
        avatar: '_1',
        visible: true,
        messages: [
          {
            text: 'Che squadra tifi?',
            date: '02.02.2021 ore 10.15',
            shortdate: '10.15',
            type: 'received',
          },
          {
            text: 'Nessuna in particolare tu?',
            date: '02.02.2021 ore 10.18',
            shortdate: '10.18',
            type: 'sent',
          },
          // {
          //   text: 'LA MAGGICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
          //   date: '02.02.2021 ore 10.18',
          //   shortdate: '10.18',
          //   type: 'received'
          // },
          // {
          //   text: 'DAJEEEEEEE',
          //   date: '02.02.2021 ore 10.20',
          //   shortdate: '10.20',
          //   type: 'sent'
          // }
        ]
      },
      // oggetto 2
      {
        name: 'Francesco',
        avatar: '_2',
        visible: true,
        messages: [
          {
            text: 'A che ora giochi domani?',
            date: '02.02.2021 ore 10.40',
            shortdate: '10.40',
            type: 'sent'
          },
          {
            text: 'Alle 15.30',
            date: '02.02.2021 ore 10.40',
            shortdate: '10.40',
            type: 'received'
          },
          {
            text: 'Ok, ti vengo a vedere',
            date: '02.02.2021 ore 10.41',
            shortdate: '10.41',
            type: 'sent'
          },
          {
            text: 'Grande, ti aspetto!',
            date: '02.02.2021 ore 10.41',
            shortdate: '10.41',
            type: 'received'
          }
        ]
      },
      // oggetto 3
      {
        name: 'Fabio',
        avatar: '_3',
        visible: true,
        messages: [
          {
            text: 'Vado al cinema',
            date: '02.02.2021 ore 12.24',
            shortdate: '12.24',
            type: 'sent'
          },
          {
            text: 'Che film danno?',
            date: '02.02.2021 ore 12.25',
            shortdate: '12.25',
            type: 'received'
          },
          {
            text: 'Tenet',
            date: '02.02.2021 ore 12.26',
            shortdate: '12.26',
            type: 'sent'
          }
        ]
      },
      // oggetto 4
      {
        name: 'Filippo',
        avatar: '_4',
        visible: true,
        messages: [
          {
            text: 'Domani vado a Roma a trovare Paolo',
            date: '02.02.2021 ore 12.45',
            shortdate: '12.45',
            type: 'received'
          },
          {
            text: 'Ah salutamelo allora!',
            date: '02.02.2021 ore 12.46',
            shortdate: '12.46',
            type: 'sent'
          },
          {
            text: 'Certo!',
            date: '02.02.2021 ore 12.46',
            shortdate: '12.46',
            type: 'received'
          },
        ]
      },
      // oggetto 5
      {
        name: 'Max',
        avatar: '_5',
        visible: true,
        messages: [
          {
            text: 'asdhvbkaslhdvbasklhdvbldsfhvbajskdvbasjdvbhasjkdvbhajskdvb',
            date: '02.02.2021 ore 12.45',
            shortdate: '12.45',
            type: 'received'
          },
          {
            text: 'Eh?',
            date: '02.02.2021 ore 12.46',
            shortdate: '12.46',
            type: 'sent'
          },
          {
            text: 'Ah scusa mi è partito un messaggio',
            date: '12.46',
            shortdate: '12.46',
            type: 'received'
          },
        ]
      },
      // oggetto 6
      {
        name: 'Maria',
        avatar: '_6',
        visible: true,
        messages: [
          {
            text: 'Dove sei?',
            date: '02.02.2021 ore 12.52',
            shortdate: '12.52',
            type: 'received'
          },
          {
            text: 'Sono in riunione',
            date: '02.02.2021 ore 12.53',
            shortdate: '12.53',
            type: 'sent'
          },
          {
            text: 'Ok quando hai finito chiamami',
            date: '02.02.2021 ore 12.53',
            shortdate: '12.53',
            type: 'received'
          }
        ]
      },
      // oggetto 7
      {
        name: 'Mario',
        avatar: '_7',
        visible: true,
        messages: [
          {
            text: 'Dove sei?',
            date: '02.02.2021 ore 12.52',
            shortdate: '12.52',
            type: 'received'
          },
          {
            text: 'Sono in riunione',
            date: '02.02.2021 ore 12.53',
            shortdate: '12.53',
            type: 'sent'
          },
          {
            text: 'Ok quando hai finito chiamami',
            date: '02.02.2021 ore 12.53',
            shortdate: '12.53',
            type: 'received'
          }
        ]
      },
      // oggetto 8
      {
        name: 'Giorgio',
        avatar: '_8',
        visible: true,
        messages: [
          {
            text: 'Dove sei?',
            date: '02.02.2021 ore 12.52',
            shortdate: '12.52',
            type: 'received'
          },
          {
            text: 'Sono in riunione',
            date: '02.02.2021 ore 12.53',
            shortdate: '12.53',
            type: 'sent'
          },
          {
            text: 'Ok quando hai finito chiamami',
            date: '02.02.2021 ore 12.53',
            shortdate: '12.53',
            type: 'received'
          }
        ]
      }
    ], // fine contatti
    mainUser: {
      nome: 'Giulio',
      cognome: 'Tavoni',
      avatar: '_user',
      access: '02.02.2021 ore 15.47',
      description: 'Playing on'
    },
    messaggioSelezionato: -1,
    messageInput: '',
    isActive: false

  }, // fine data
  methods: {
    changeUser(index) {
      this.userSelected = index;
    }, //changeUser(index)

    sendMessage() {
      let shortDate = moment().format('HH:mm');
      let date = moment().format('L') + ' ore ' + shortDate; // 02/03/2021 ore ...
      console.log(date.replace(/\//g, "."));
      // pusho il messaggio nell'array
      this.contatti[this.userSelected].messages.push(
        {
          text: this.messageInput,
          date: date,
          shortdate: shortDate,
          type: 'sent'
        }
      );
      this.messageInput = '';

      // OPZIONE 1 CON FUNZIONE INTERNA (QUI SERVE LA FUNZIONE CON LE ARROW ALTRIMENTI IL THIS NON VIENE INTERPRETATO CORRETTAMENTE)

      // setTimeout(() => {
      //
      //   shortDate = moment().format('HH:mm');
      //   date = moment().format('L') + ' ore ' + shortDate; // 02/03/2021 ore ...
      //   console.log(date.replace(/\//g, "."));
      //
      //   this.contatti[this.userSelected].messages.push(
      //     {
      //       text: 'Ok',
      //       date: date,
      //       shortdate: shortDate,
      //       type: 'received'
      //     }
      //   );
      //
      // }, 20000);

      // OPZIONE 2 CON FUNZIONE ESTERNA
      setTimeout(this.rispostaAuto, 1000);
    }, // sendMessage()

    rispostaAuto() {
      shortDate = moment().format('HH:mm');
      date = moment().format('L') + ' ore ' + shortDate; // 02/03/2021 ore ...

      this.contatti[this.userSelected].messages.push(
        {
          text: 'Ok',
          date: date,
          shortdate: shortDate,
          type: 'received'
        }
      );
    }, // rispostaAuto()

    // FUNZIONE PER CALCOLARE L'ORARIO DELL'ULTIMO MESSAGGIO RICEVUTO (NON INVIATO)
    lastAccess() {
      let ultimoAccesso;
      let i = this.contatti[this.userSelected].messages.length - 1;
      while (i >= 0) {
        if(this.contatti[this.userSelected].messages[i].type == 'received') {
          return ultimoAccesso = this.contatti[this.userSelected].messages[i].shortdate;
        } else {
          i--;
        }
      }
    }, // fine lastAccess()
    searchName() {
      this.contatti.forEach((item) => {
        let nameToCheck = item.name.toLowerCase();
        let input = this.searchInput.toLowerCase();

        if(!nameToCheck.includes(input)) {
          item.visible = false;
        } else {
          item.visible = true;
        }
      });
    }, // fine searchName()
    deleteMessage(index) {
      // console.log(this.contatti[this.userSelected].messages.length - 1);
      if(this.contatti[this.userSelected].messages.length - 1 != 0) {
        this.contatti[this.userSelected].messages.splice(index, 1);
      } else {
        this.contatti[this.userSelected].messages.splice(index, 1);
      }
    }, // fine deleteMessage(index)
    toggleTab(index) {
      this.messaggioSelezionato = index;
      this.isActive = !this.isActive;
    } // fine toggleTab(index)


  } // fine methods

});
