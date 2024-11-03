import './App.css';
import Form from './component/Form';
import { Image } from "@nextui-org/image";

function App() {
  return (
    <div className="flex h-screen">
      {/* Section Texte (gauche) */}
      <div className="flex-1 flex items-center justify-center text-white bg-primary">
        {/* Contenu du texte avec espacement */}
        
          <p className=" text-center">
            text texte texte texte texte texte texte texte texte texte
            text texte texte texte texte texte texte texte texte texte
            text texte texte texte texte texte texte texte texte texte
            text texte texte texte texte texte texte texte texte texte
            text texte texte texte texte texte texte texte texte texte
            text texte texte texte texte texte texte texte texte texte
            text texte texte texte texte texte texte texte texte texte
            text texte texte texte texte texte texte texte texte texte
            text texte texte texte texte texte texte texte texte texte
            text texte texte texte texte texte texte texte texte texte
            text texte texte texte texte texte texte texte texte texte
            text texte texte texte texte texte texte texte texte texte
          </p>
        
      </div>

      {/* Section Formulaire (droite) */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <Form />
      </div>
    </div>
  );
}

export default App;
