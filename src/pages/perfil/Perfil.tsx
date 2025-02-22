/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            alert('Você precisa estar logado')
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto m-4 rounded-2xl overflow-hidden'>

            <img 
                className='w-full h-72 object-cover border-b-8 border-white' 
                src="https://ik.imagekit.io/vp8x0spqk/Generation/_AI%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%20_%E3%83%95%E3%83%AA%E3%83%BC%E8%83%8C%E6%99%AF%E7%B4%A0%E6%9D%90_%E6%9C%88%E3%81%A8%E6%A1%9C%E3%81%AE%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E7%B4%A0%E6%9D%90%E9%9B%86_AI%E7%94%9F%E6%88%90%E4%BD%9C%E5%93%81_%20-%20%E3%82%B4%E3%83%AA%E3%83%A9%E3%81%AE%E7%B4%A0%E6%9D%90%E5%B1%8B%E3%81%95%E3%82%93%E3%81%AE%E3%83%9E%E3%83%B3%E3%82%AC%20_AIart%20_%E3%83%95%E3%83%AA%E3%83%BC%E7%B4%A0%E6%9D%90%20_%E8%91%97%E4%BD%9C%E6%A8%A9%E3%83%95%E3%83%AA%E3%83%BC%20-%20pixiv.jpg?updatedAt=1740159687809" alt="Capa do Perfil" />

            <img 
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' 
                src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

            <div 
                className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-sky-500 text-white text-2xl items-center justify-center"
            >
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
            </div>

        </div>
    )
}

export default Perfil