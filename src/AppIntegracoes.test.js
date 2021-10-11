import React from "react";
import { render, screen } from '@testing-library/react';
import api from './api';
import App from './App';

jest.mock('./api');

describe('Requisições para API', () => {
    it('Exibir lista de transacoes através da API', async() => {
        api.listaTransacoes.mockResolvedValue([{
            "valor": "10",
            "transacao": "saque",
            "data": "10/08/2020",
            "id": 1
        },{
            "valor": "10",
            "transacao": "deposito",
            "data": "26/09/2020",
            "id": 2
        }]);

        render(<App />);

        expect(await screen.findByText('saque')).toBeInTheDocument();

        // expect(screen.findByText('saque')).toBeInTheDocument;
        expect(screen.getByTestId('transacoes').children.length).toBe(2);
    });
});