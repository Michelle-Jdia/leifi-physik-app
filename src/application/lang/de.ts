/*
    @title = title of the page in the header
    @headline = main headline of the page
*/

export const $t = {
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    close: 'Schließen',
    app: {
        title: '',
    },
    tab: {
        home: 'Start',
        branch: 'Alle Inhalte',
        favorite: 'Favoriten',
        collection: 'Sammlungen',
    },
    home: {
        title: 'Willkommen bei LEIFIphysik',
    },
    branch: {
        title: 'Alle Inhalte',
        // headline: 'Teilgebiete der Physik',
    },
    favorite: {
        title: 'Favoriten',
        // listHeadline: 'Deine Favoriten',
        // headline: 'Du hast noch keine Artikel gemerkt',
    },
    history: {
        title: 'Zuletzt angesehen',
    },
    collection: {
        title: 'Sammlungen',
        allCollections: 'Alle Sammlungen',
        noMyCollections:
            'Du hast noch keine Sammlungen. Gehe zu den Sammlungen, um Sammlungen zu erstellen oder\n' +
            ' zu abonnieren.',
        listMyCollections: 'Finde hier Deine zuletzt erstellen Sammlungen.',
        yourMyCollections: 'Deine Sammlungen',
        addCollection: 'Sammlung hinzufügen',
        addContent: 'Inhalte hinzufügen',
        addToCollection: 'Zu Sammlung hinzufügen',
        create: 'Erstellen',
        createCollection: 'Eigene Sammlung erstellen',
        collectionName: 'Name der Sammlung',
        searchButtonText: 'Aufrufen',
        searchInputPlaceholder: 'Shortcode',
        subtitleSubscribed: 'Abonnierte Sammlung ',
        subtitleUnSubscribed: 'Vorschau zu Sammlung ',
        subtitleMyCollection: 'Meine Sammlung ',
        subscribe: 'Sammlung abonnieren',
        unsubscribe: 'Abonnement beenden',
        deleteCollection: 'Sammlung löschen',
        deleteArticle: `Artikel löschen`,
        noItemsParagraph:
            'Diese Sammlung ist noch leer. Klicke auf bearbeiten oder auf die untere Schaltfläche um deine ersten Artikel hinzuzufügen.',
        addArticle: 'Artikel hinzufügen',
        addHeadline: 'Überschrift hinzufügen',
        plusArticle: '+ Artikel',
        plusHeadline: '+ Überschrift',
        editCollectionTitle: 'Sammlung bearbeiten',
        copyCollectionTitle: 'Sammlung kopieren',
        copyTitleField: 'Titel der neuen Sammlung',
        editTitleField: 'Titel der Sammlung',
        copyCollectionInfo:
            'Der gespeicherte Lernfortschritt und Kommentare für diese Sammlung werden nicht mit kopiert!',
        noCollectionsParagraph: 'Hier existieren noch keine Sammlungen',
        articlesAddedToCollection: ' neue Artikel wurden in die Sammlung eingefügt.',
        indexButtonAll: 'Alle',
        indexButtonMine: 'Meine',
        addNoteModalTitle: 'Notiz hinzufügen',
        addNoteModalHeadline: (
            article: string,
            collection: string,
        ) => `Deine Notiz für den Artikel "${article}" in der Sammlung
        "${collection}"`,
        indexButtonSubscribed: 'Abonnierte',
        confirmDeleteCollection: 'Sammlung wirklich löschen?',
        confirmDeleteMultipleArticles: 'Ja, ausgewählte Artikel aus der Sammlung entfernen',
        confirmDeleteArticle: (title: string) => `Ja, "${title}" entfernen.`,
        confirmDeleteArticleHeader: (title: string) => `"${title}" wirklich entfernen?`,
        confirmDeleteMultipleArticlesHeader: (count: number) =>
            `${count} ausgewählte Artikel aus der Sammlung entfernen?`,
        confirmDeleteCollectionHeader: (title: string) =>
            `Meine Sammlung ${title} wirklich entfernen?`,
        learnedCountBadge: (learned: number, total: number) =>
            `${learned}/${total} Inhalten gelernt`,
        // headline: 'Sammlung deiner Lehrkraft',
        // headline1: 'Eigene Sammlung erstellen',
    },
    search: {
        title: 'Suche',
        titleWithSearch: `Suche nach: `,
        noResults: 'Keine Ergebnisse',
        moreResults: 'Mehr Ergebnisse anzeigen',
        globalSearchPlaceholder: 'Alle Inhalte durchsuchen oder Code eingeben...',
        noQueryText: `Klicke auf das 🔍 symbol um eine Suche durchzuführen!`,
        // noQueryTextStart: 'Klicke auf das ',
        // noQueryTextEnd: ' symbol um eine Suche durchzuführen!',
        collectionNotFound: (collectionTitle: string) =>
            `Sammlung "${collectionTitle}" nicht gefunden.`,
        collectionNotFoundRedirect: (collectionTitle: string) =>
            `Es wurde keine Sammlung mit dem Code "${collectionTitle}" gefunden. Sie sind zur Suche weitergeleitet worden.`,
        collectionArticleSearchSegmentSearch: 'Suche',
        collectionArticleSearchSegmentSelected: 'Ausgewählt: ',
        collectionArticleSearchHeadline: 'Ausgewählte Artikel',
        collectionArticleSearch1:
            'Bisher keine Artikel ausgewählt, tippe einen Suchbegriff in das Suchfeld um Ergebnisse anzuzeigen.',
        collectionArticleSearch2: 'Tipp: Du kannst auch mehrere Artikel auswählen.',
    },
    settings: {
        deleteAllStorageSuccess: 'Der lokale Speicher wurde erfolgreich gelöscht.',
    },
    task: {
        headline: 'Aufgabe',
        solutionSection: {
            headline: 'Lösung',
            accordionLabel: 'Lösung einblenden',
        },
        relatedIssueTitle: 'Grundwissen zu dieser Aufgabe',
    },
    topic: {
        typeSubtitle: 'Themenbereich',
    },
    link: {
        typeSubtitle: 'Link',
    },
    download: {
        headline: 'Download',
        fielDownloadButtonLabel: 'Herunterladen',
        accordionLabel: 'Didaktische Hinweise',
    },
    error: {
        connection: 'Etwas ist schief gelaufen',
    },
    issue: {
        taskSectionHeadline: 'Aufgaben',
        buttonPrevIssue: 'Vorheriger Artikel',
        buttonNextIssue: 'Nächster Artikel',
    },
    profile: {
        showProfile: 'Profil anzeigen',
    },
};
