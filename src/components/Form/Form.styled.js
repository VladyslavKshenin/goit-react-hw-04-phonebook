import styled from 'styled-components'

export const Form = styled('form')(() => {
    return {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px 20px",
    label: {
        display: "block",
        fontSize: "18px",
        lineHeight: "1.5", 
    input: {
        display: "block",
        width: "93%",
        padding: '5px 10px',
        fontSize: "16px",
        fontWeight: "inherit",
        fontFamily: "inherit",
        color: "inherit",
        border: "1px solid #34345664",
        borderRadius:"12px",      
        }
        }
    }
})
export const Button = styled('button')(() => {
    return {
        display: "block",
        margin: "10px auto",
        padding: "10px 20px",
        width: "170px",
        fontSize: "16px",
        fontWeight: "inherit",
        color: " #e3e3ee",
        textAlign: "center",
        textTransform: "uppercase",
        cursor: "pointer",
        backgroundColor: "#3f51b5",
        borderRadius: "12px",
        border:"none",
    }
})