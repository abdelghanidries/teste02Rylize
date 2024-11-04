import './App.css';
import Form from './component/Form';
import { Image } from "@nextui-org/image";

function App() {
  return (
    <div className="flex h-screen">
      {/* Section Texte (gauche) */}
      <div className="flex-1 flex items-center justify-center text-white bg-primary">
        {/* Contenu du texte avec espacement */}
        
        
        <p className="text-center">
            The passage experienced a surge in popularity 
            during the 1960s when Letraset used it on their 
            dry-transfer sheets, and again during the 90s as
            desktop publishers bundled the text with their
            software
            <br/>
            <br/>

            Vincent Obi

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
