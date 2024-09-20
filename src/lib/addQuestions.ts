import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "./firebase"; // Importe Firestore

// Les questions à ajouter dans Firestore
const questions = [
  { title: "Marcher sur un Lego en pleine nuit" },
  { title: "Répondre 'à toi aussi' quand on te dit 'bon appétit'" },
  { title: "Essayer d'ouvrir la porte avec tes clés de voiture" },
  { title: "Envoyer un message embarrassant à la mauvaise personne" },
  { title: "Rire tellement fort que tu renverses ta boisson" },
  { title: "Crier 'Allô' alors que le micro est coupé" },
  { title: "Chercher tes lunettes alors qu'elles sont sur ta tête" },
  { title: "Danser seul dans ta chambre comme si personne ne te regardait" },
  { title: "Marcher dans une porte vitrée en public" },
  { title: "Te retrouver dans la mauvaise réunion Zoom" },
  { title: "T'évanouir devant un film d'horreur" },
  {
    title:
      "Croire que quelqu'un te fait signe alors qu'il s'adresse à la personne derrière toi",
  },
  { title: "Essayer de montrer à quelqu'un une vidéo mais le son est coupé" },
  { title: "Mettre tes écouteurs et réaliser qu'ils ne sont pas branchés" },
  {
    title:
      "Dire 'au revoir' puis marcher dans la même direction que la personne",
  },
  { title: "T'effondrer sur le canapé après avoir rangé un seul tiroir" },
  { title: "Cliquer sur 'Répondre à tous' sans le vouloir" },
  { title: "Répondre à une question en classe alors que tu n'écoutais pas" },
  { title: "Faire semblant de comprendre une blague et rire nerveusement" },
  { title: "Te tromper d'embarcadère en prenant le bateau" },
  { title: "Chanter sous la douche comme si tu étais en concert" },
  { title: "Oublier le prénom d'une personne juste après qu'elle te l'a dit" },
  { title: "Prendre une photo de groupe et cligner des yeux à chaque fois" },
  {
    title:
      "Essayer de frapper dans une balle de golf et la manquer complètement",
  },
  { title: "S'endormir en regardant un film que tu attendais depuis des mois" },
  { title: "Confondre du sel et du sucre en cuisinant" },
  { title: "Appeler ton professeur 'maman' par accident" },
  { title: "Tenter de t'échapper discrètement d'une conversation ennuyeuse" },
  {
    title:
      "Faire une grimace dans l'ascenseur quand tu réalises qu'il y a une caméra",
  },
  { title: "Réaliser que tu portes deux chaussettes dépareillées" },
  {
    title:
      "S'asseoir sur une chaise et se rendre compte qu'elle est plus basse que prévu",
  },
  { title: "Oublier où tu as garé ta voiture dans un parking immense" },
  { title: "Faire une capture d'écran par erreur pendant un appel vidéo" },
  { title: "Envoyer un emoji par erreur dans un email professionnel" },
  { title: "Essayer de chuchoter et finir par parler encore plus fort" },
  { title: "Rater une poignée de main et faire un check awkward" },
  { title: "Boire à la bouteille et se renverser de l'eau sur soi" },
  { title: "Rater ton arrêt de bus en étant absorbé par ton téléphone" },
  { title: "Te déguiser pour une soirée à thème... et être le seul déguisé" },
  { title: "Ouvrir le frigo et oublier pourquoi tu l'as fait" },
  {
    title:
      "Appuyer frénétiquement sur le bouton d'ascenseur alors qu'il est déjà en route",
  },
  { title: "S'endormir pendant une réunion en ligne avec la caméra allumée" },
  {
    title: "Essayer de fermer ton sac à dos et te coincer la fermeture éclair",
  },
  { title: "Manger bruyamment dans une salle silencieuse" },
  { title: "Essayer de parler à Siri mais elle ne comprend jamais" },
  {
    title: "Faire semblant de taper un message quand tu veux éviter quelqu'un",
  },
  { title: "Te coincer les doigts dans une porte" },
  { title: "Dépenser une fortune en café et ne boire que des gorgées" },
  { title: "Parler à ton animal de compagnie comme s'il comprenait tout" },
  { title: "Rater la première marche et trébucher en public" },
  {
    title:
      "Être en retard à un rendez-vous et te rendre compte que c'était pour demain",
  },
  {
    title:
      "Essayer de t'endormir mais repenser à une chose embarrassante que tu as faite il y a 10 ans",
  },
  {
    title:
      "Répondre à une question dans ta tête et te rendre compte que la personne attendait une vraie réponse",
  },
  { title: "Tomber en essayant de sauter dans une piscine" },
  {
    title:
      "Marcher dans la mauvaise direction et prétendre que tu voulais juste faire demi-tour",
  },
  { title: "Envoyer un message vocal embarrassant par accident" },
  { title: "Essayer de faire une blague et oublier la chute" },
  { title: "Chercher tes clés frénétiquement et les trouver dans ta poche" },
  {
    title:
      "Porter des lunettes de soleil à l'intérieur et te demander pourquoi c'est si sombre",
  },
  { title: "T'étouffer avec ta propre salive en pleine conversation" },
  { title: "Arriver à un dîner avec une tâche géante sur ton t-shirt" },
  { title: "Te coincer dans un pull en l'enfilant" },
  { title: "Regarder un film triste et pleurer comme un bébé" },
  {
    title:
      "Appuyer sur 'envoyer' et réaliser que tu as fait une faute dans ton message",
  },
  {
    title:
      "Tenter d'expliquer quelque chose, mais finir par t'embrouiller encore plus",
  },
  { title: "Rater la marche en descendant du bus" },
  {
    title:
      "Avoir une conversation entière avec quelqu'un que tu ne reconnais pas",
  },
  { title: "Réaliser que tu as mis ta chemise à l'envers" },
  { title: "Cliquer sur 'J'aime' par accident sur une vieille photo" },
  { title: "Essayer de te gratter discrètement en public" },
  { title: "Envoyer un texto en te parlant à toi-même" },
  {
    title:
      "Confondre deux chansons dans ta tête et chanter les mauvaises paroles",
  },
  { title: "Taper un message pendant 5 minutes, puis tout effacer d'un coup" },
  { title: "Ne pas comprendre un jeu de mots et rire quand même" },
  {
    title: "Prendre une photo mais oublier de retirer ton doigt de l'objectif",
  },
  { title: "Ouvrir un sac de chips et l'exploser partout" },
  { title: "Essayer de garder ton sérieux pendant une situation ridicule" },
  { title: "Faire un câlin à quelqu'un qui te tendait juste la main" },
  { title: "Perdre la télécommande alors qu'elle est juste à côté de toi" },
  { title: "Dire 'à vous aussi' au serveur quand il te souhaite bon appétit" },
  {
    title:
      "Chanter une chanson à fond dans ta voiture et réaliser que la fenêtre est ouverte",
  },
  {
    title:
      "Mettre tes chaussures à l'envers et te demander pourquoi c'est inconfortable",
  },
  { title: "Commander un plat super épicé et regretter immédiatement" },
  { title: "Chercher ton téléphone alors que tu l'as dans la main" },
  {
    title:
      "Parler à une machine automatique et dire 'merci' quand elle te rend la monnaie",
  },
  { title: "Essayer de prendre une pose cool pour une photo et trébucher" },
  { title: "Rater un high-five avec un ami et essayer de jouer ça cool" },
  { title: "Essayer de sourire pour une photo et finir par faire une grimace" },
  { title: "Appeler quelqu'un par le mauvais prénom pendant tout un dîner" },
  { title: "Essayer de courir pour attraper le bus et rater la porte de peu" },
  { title: "Parler à un bébé comme s'il pouvait te répondre" },
  {
    title:
      "Faire semblant de ne pas voir quelqu'un que tu connais pour éviter une conversation",
  },
  { title: "Aller dans un magasin et oublier pourquoi tu y es entré" },
  { title: "Essayer de te gratter le dos et ne pas atteindre la bonne zone" },
  { title: "Te tromper de numéro et essayer de raccrocher discrètement" },
  {
    title: "Prendre un selfie avec quelqu'un et couper la moitié de son visage",
  },
  {
    title:
      "Arriver en retard et faire un maximum de bruit en essayant d'être discret",
  },
  { title: "Faire tomber ton téléphone dans le lit en essayant de t'endormir" },
  {
    title:
      "Oublier un mot en pleine conversation et inventer une phrase pour le remplacer",
  },
  { title: "Faire un lapsus embarrassant en pleine réunion" },
];

export const addQuestionsToFirestore = async () => {
  const docRef = doc(db, "swipe-it", "questions"); // Remplace 'mainCollection' et 'documentId'

  // Référence à la sous-collection 'questions'
  const questionsRef = collection(docRef, "questions");
  try {
    for (const question of questions) {
      await addDoc(questionsRef, {
        title: question.title, // Ajoute le champ 'title' pour chaque question
        liked: 0, // Initialise les likes à 0
        disliked: 0, // Initialise les dislikes à 0
      });
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout des questions :", error);
  }
};
