import './myLabel.css'

export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar de la etiqueta
     */
    label: string
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3'
    /**
     * Capitalizar el texto
     */
    allCaps?: boolean
    /**
     * Este es el color de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary'
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string
    /**
     * Color personalizado del fondo
     */
    backgroundColor?: string
}
export const MyLabel = (
    {
        label = 'No Label',
        size  = 'normal',
        color = 'primary',
        allCaps = false,
        fontColor,
        backgroundColor = 'transparent'
    }: MyLabelProps ) => {
    return (
        <span
            className={ ` label ${size} text-${color}` }
            style={{ color: fontColor, backgroundColor }}
        >
            { allCaps ? label.toUpperCase() : label  }
        </span>
    )
}

export default MyLabel