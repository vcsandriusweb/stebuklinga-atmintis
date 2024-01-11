import './Korta.css'

export default function Korta( {korta, handlePasirinkimas, flipped, disabled } ) {
    const handleClick = () => {
        if(!disabled) {
            handlePasirinkimas(korta)
        }
    }

    return (
        <div className='korta'>
              <div className={flipped ? 'flipped' : ''}>
                <img src={korta.src} className='priekis' alt="kortos priekine puse" />
                <img 
                    src='stebuklinga-atmintis/img/cover.webp' 
                    className='nugara' 
                    alt="kortos nugarine puse" 
                    onClick={handleClick}
                />
              </div>
        </div>
    )
}
