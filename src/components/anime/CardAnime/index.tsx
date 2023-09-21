
import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"
import { IApianimeContext } from "interfaces"
import Image from "next/image"
import styles from "./page.module.scss"

type ApiProps = {
    data: IApianimeContext  
    // |
}
  

export const CardAnime = ({data}:ApiProps) => {
    return (

        <WrapperMain>
            <section className={`${styles.SectionIframe}`}>
                <iframe width={`100%-12%`} height={`100%-12%`} src={data?.url} title={data?.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                
                <h1>{data?.title}</h1> 
                <h3>{data?.subtitle}</h3>
            </section>
           
        </WrapperMain>
            
    )
}