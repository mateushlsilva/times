import Select from "react-select";
import '../App.css'
const options = [
    { value: 'Santos', label: 'Santos', mundial: "Tem Mundial" },
    { value: 'Flamengo', label: 'Flamengo' , mundial: "Tem Mundial"},
    { value: 'Grêmio', label: 'Grêmio', mundial: "Tem Mundial" },
    { value: 'São Paulo', label: 'São Paulo', mundial: "Tem Mundial" },
    { value: 'Corinthians', label: 'Corinthians', mundial: "Tem Mundial" },
    { value: 'Internacional', label: 'Internacional', mundial: "Tem Mundial" },
    { value: 'Cruzeiro', label: 'Cruzeiro', mundial: "Não Tem Mundial" },
    { value: 'Vasco', label: 'Vasco', mundial: "Não Tem Mundial" },
    { value: 'Palmeiras', label: 'Palmeiras', mundial: "Não Tem Mundial" },
    { value: 'Atlético Mineiro', label: 'Atlético Mineiro', mundial: "Não Tem Mundial" },
    { value: 'Fluminense', label: 'Fluminense', mundial: "Não Tem Mundial" },
]

export function MyComponent({hand}:any){
    return(
        <Select 
        options={options} 
        onChange={(e) => hand(e)}
        className="select"
        />
    )
}