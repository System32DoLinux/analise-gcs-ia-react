import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
    it("incrementa o contador quando clica em 'Incrementar'", () => {
        render(<App />)
        const button = screen.getByRole('button', { name: /Incrementar/i })
        fireEvent.click(button)
        // verifica que o texto '1' está presente no documento
        expect(screen.getByText('1')).toBeInTheDocument()
    })
})

