angular.module('app').config(function ($translateProvider) {
    $translateProvider
    // Ingles
        .translations('en', {
            APP_TITLE: 'Scrum Planning',
            CARDS: {
                POKER: 'Poker Cards',
                FIBONACCI: 'Fibonacci Cards',
                NATURAL: 'Natural Cards',
                TSHIRT: 'T-shirt Cards',
                EMOJI: 'Emoji Cards',
                CUSTOM: 'Custom Cards',
                INPUT_DESCRIPTION: 'Card description',
                NO_CARDS: 'Nothing here',
                ADD_MODAL: {
                    TITLE: 'Add New Card',
                    BUTTON_CONFIRM: 'Save Card',
                    BUTTON_CANCEL: 'Cancel'
                }
            },
            SETTINGS: {
                TITLE: 'Settings',
                BACKGROUND: {
                    TITLE: 'Change Background',
                    SUBHEADER_COLOR: 'Solid'
                },
                IMAGE: {
                    TITLE: 'Background Image',
                    BUTTON_ADD: 'Select Image',
                    BUTTON_REMOVE: 'Remove Image',
                    FILESIZE: 'File is too long'
                },
                LANGUAGE: {
                    TITLE: 'Change Language',
                    SUBHEADER_LANGUAGE: 'Language'
                },
                FULLSCREEN: {
                    TITLE: 'Fullscreen',
                    SUBHEADER_FULLSCREEN: 'Set fullscreen'
                },
                FACING: {
                    TITLE: 'Facing',
                    SUBHEADER_FACING: 'Show card text immediately upon opening (ignore backface)'
                },
                RESET: {
                    TITLE: 'Reset',
                    DIALOG_CONFIRM: 'You have requested to reset the settings. What do you want to do?',
                    BUTTON_RESET: 'Reset Settings',
                    BUTTON_CONFIRM: 'Reset',
                    BUTTON_CANCEL: 'Not Reset'
                }
            },
            DONATE: {
                TITLE: 'Donate',
                INPUT_CURRENCY: 'Currency',
                INPUT_AMOUNT: 'Amount',
                BUTTON_DONATE: 'Donate (Paypal)'
            }
        })
        // Espanhol
        .translations('es', {
            APP_TITLE: 'Scrum Planning',
            CARDS: {
                POKER: 'Cartas de Póquer',
                FIBONACCI: 'Sucesión de Fibonacci',
                NATURAL: 'Números Naturales',
                TSHIRT: 'Cartas de Ropa',
                EMOJI: 'Cartas de Emojis',
                CUSTOM: 'Cartas Personalizadas',
                INPUT_DESCRIPTION: 'Descripción de Las Cartas',
                NO_CARDS: 'Nada aquí',
                ADD_MODAL: {
                    TITLE: 'Agregar Nueva Carta',
                    BUTTON_CONFIRM: 'Guardar Carta',
                    BUTTON_CANCEL: 'Cancelar'
                }
            },
            SETTINGS: {
                TITLE: 'Ajustes',
                BACKGROUND: {
                    TITLE: 'Cambiar el Fondo',
                    SUBHEADER_COLOR: 'Color Sólido'
                },
                IMAGE: {
                    TITLE: 'Imagen de Fondo',
                    BUTTON_ADD: 'Seleccionar Imagen',
                    BUTTON_REMOVE: 'Eliminar Imagen',
                    FILESIZE: 'El archivo es demasiado largo'
                },
                LANGUAGE: {
                    TITLE: 'Cambiar el Idioma',
                    SUBHEADER_LANGUAGE: 'Idioma'
                },
                FULLSCREEN: {
                    TITLE: 'Pantalla Completa',
                    SUBHEADER_FULLSCREEN: 'Establecer pantalla completa'
                },
                FACING: {
                    TITLE: 'Cara',
                    SUBHEADER_FACING: 'Mostrar el texto de la tarjeta inmediatamente después de la apertura (ignorar la cara posterior)'
                },
                RESET: {
                    TITLE: 'Reiniciar',
                    DIALOG_CONFIRM: 'Ha solicitado restablecer la configuración. ¿Qué desea hacer?',
                    BUTTON_RESET: 'Reiniciar Ajustes',
                    BUTTON_CONFIRM: 'Reiniciar',
                    BUTTON_CANCEL: 'No Reiniciar'
                }
            },
            DONATE: {
                TITLE: 'Donar',
                INPUT_CURRENCY: 'Moneda',
                INPUT_AMOUNT: 'Valor',
                BUTTON_DONATE: 'Donar (Paypal)'
            }
        })
        // Portugues
        .translations('pt-br', {
            APP_TITLE: 'Scrum Planning',
            CARDS: {
                POKER: 'Cartas de Poker',
                FIBONACCI: 'Sequência Fibonacci',
                NATURAL: 'Números Naturais',
                TSHIRT: 'Cartas de Vestuário',
                EMOJI: 'Cartas de Emojis',
                CUSTOM: 'Cartas Personalizadas',
                INPUT_DESCRIPTION: 'Descrição das cartas',
                NO_CARDS: 'Nada aqui',
                ADD_MODAL: {
                    TITLE: 'Adicionar Nova Carta',
                    BUTTON_CONFIRM: 'Salvar Carta',
                    BUTTON_CANCEL: 'Cancelar'
                }
            },
            SETTINGS: {
                TITLE: 'Configurações',
                BACKGROUND: {
                    TITLE: 'Alterar Cor Tema',
                    SUBHEADER_COLOR: 'Cor Sólida'
                },
                IMAGE: {
                    TITLE: 'Imagem de Fundo',
                    BUTTON_ADD: 'Selecionar Imagem',
                    BUTTON_REMOVE: 'Remover Imagem',
                    FILESIZE: 'O arquivo é muito grande'
                },
                LANGUAGE: {
                    TITLE: 'Alterar Idioma',
                    SUBHEADER_LANGUAGE: 'Idioma'
                },
                FULLSCREEN: {
                    TITLE: 'Tela Cheia',
                    SUBHEADER_FULLSCREEN: 'Colocar em tela cheia'
                },
                FACING: {
                    TITLE: 'Face',
                    SUBHEADER_FACING: 'Mostrar o texto da carta imediatamente após a abertura (ignorar traseira)'
                },
                RESET: {
                    TITLE: 'Redefinir',
                    DIALOG_CONFIRM: 'Você solicitou redefinir as configurações. O que deseja fazer?',
                    BUTTON_RESET: 'Redefinir Configurações',
                    BUTTON_CONFIRM: 'Redefinir',
                    BUTTON_CANCEL: 'Não Redefinir'
                }
            },
            DONATE: {
                TITLE: 'Doar',
                INPUT_CURRENCY: 'Moeda',
                INPUT_AMOUNT: 'Valor',
                BUTTON_DONATE: 'Doar (Paypal)'
            }
        })
        // Holandes
        .translations('nl', {
            APP_TITLE: 'Scrum Planning',
            CARDS: {
                POKER: 'Poker Kaarten',
                FIBONACCI: 'Fibonacci Kaarten',
                NATURAL: 'Natuurijke Kaarten',
                TSHIRT: 'T-shirt Kaarten',
                EMOJI: 'Emoji Kaarten',
                CUSTOM: 'Aangepaste Kaarten',
                INPUT_DESCRIPTION: 'Kaart Omschrijving',
                NO_CARDS: 'Niets hier',
                ADD_MODAL: {
                    TITLE: 'Voeg nieuwe kaart toe',
                    BUTTON_CONFIRM: 'Sparen opslaan',
                    BUTTON_CANCEL: 'Annuleer'
                }
            },
            SETTINGS: {
                TITLE: 'Instellingen',
                BACKGROUND: {
                    TITLE: 'Wijzig Achtergrond',
                    SUBHEADER_COLOR: 'Effen Kleur'
                },
                IMAGE: {
                    TITLE: 'Achtergrond Afbeelding',
                    BUTTON_ADD: 'Selecteer Afbeelding',
                    BUTTON_REMOVE: 'Verwijder Afbeelding',
                    FILESIZE: 'Bestand is te lang'
                },
                LANGUAGE: {
                    TITLE: 'Wijzig Taal',
                    SUBHEADER_LANGUAGE: 'Taal'
                },
                FULLSCREEN: {
                    TITLE: 'Volledig Scherm',
                    SUBHEADER_FULLSCREEN: 'Stel het volledige scherm in'
                },
                FACING: {
                    TITLE: 'Voorkant',
                    SUBHEADER_FACING: 'Toon kaarttekst onmiddellijk na opening (negeer achterkant)'
                },
                RESET: {
                    TITLE: 'Reset',
                    DIALOG_CONFIRM: 'U verzocht om de instellingen te resetten. Wat zou jij doen?',
                    BUTTON_RESET: 'Reset Instellingen',
                    BUTTON_CONFIRM: 'Resetten',
                    BUTTON_CANCEL: 'Niet Opnieuw Ingesteld'
                }
            },
            DONATE: {
                TITLE: 'Doneren',
                INPUT_CURRENCY: 'Valuta',
                INPUT_AMOUNT: 'Waarde',
                BUTTON_DONATE: 'Doneren (Paypal)'
            }
        })
        .fallbackLanguage('en')
        .preferredLanguage('en')
    ;
});