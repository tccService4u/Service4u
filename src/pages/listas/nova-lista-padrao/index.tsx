import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { FormControl, InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify'
=======
import { Form, FormControl, InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)

import * as M from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { useAsyncEffect } from '@react-hook/async'

import { database, firebase } from '../../../services/firebase'
import { ListaProdutos } from '../../Produtos/tipos'
<<<<<<< HEAD
import Tabela from './../../../components/Tabela/index'
import App from './../../../container/App'
import * as P from './styles'
import { useStyles } from './styles'
import { ListaPadrao } from './tipos'
=======
import App from './../../../container/App'
import * as P from './styles'
import { useStyles } from './styles'
<<<<<<< HEAD
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
=======
import { ListaPadrao } from './tipos'
>>>>>>> b6b34a9 (🚧 #S4U-24 | Tratando dados para montar tabela)

const NovaListaPadrao: React.FC = () => {
  const classes = useStyles()
  const [title, setTitle] = useState('')
<<<<<<< HEAD
<<<<<<< HEAD
  const [produto, setProduto] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [produtos, setProdutos] = useState<ListaProdutos[]>([])
  const [lista, setLista] = useState<ListaPadrao[]>([])
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState()
  const [medida, setMedida] = useState('')
  const [preencheInputUnidade, setPreencheInputUnidade] = useState(null)
  const [loading, setLoading] = useState(true)
  const produtosLista = []
  const [produtoLista, setProdutoLista] = useState<ListaProdutos[]>([])
  const listagemProdutos = []
  const history = useHistory()

  const getDadosFirebase = () => {
    database
=======
=======
  const [produto, setProduto] = useState('')
  const [quantidade, setQuantidade] = useState('')
>>>>>>> b6b34a9 (🚧 #S4U-24 | Tratando dados para montar tabela)
  const [produtos, setProdutos] = useState<ListaProdutos[]>([])
  const [lista, setLista] = useState<ListaPadrao[]>([])
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState()
  const [medida, setMedida] = useState('')
  const [preencheInputUnidade, setPreencheInputUnidade] = useState(null)
<<<<<<< HEAD
  const getDadosFirebase = async () => {
    await database
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
=======
  const [loading, setLoading] = useState(true)
  const produtosLista = []
  const produtoLista = []

  const getDadosFirebase = () => {
    database
>>>>>>> b6b34a9 (🚧 #S4U-24 | Tratando dados para montar tabela)
      .ref('produtos')
      .once('value')

      .then(snapshot => {
        if (snapshot.exists()) {
          snapshot.forEach(childSnapshot => {
            const key = childSnapshot.key
            const data = childSnapshot.val()
            produtosLista.push({
              uid: key,
              medida: data.produtoMedida,
              nome: data.produtoNome
            })
            options.push({
              value: data.produtoNome,
              label: data.produtoNome
            })
          })
        } else {
          console.log('No data available')
        }
<<<<<<< HEAD
<<<<<<< HEAD
        setLoading(false)
=======
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
=======
        setLoading(false)
>>>>>>> b6b34a9 (🚧 #S4U-24 | Tratando dados para montar tabela)
      })
      .catch(error => {
        console.error(error)
      })
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
=======

>>>>>>> b6b34a9 (🚧 #S4U-24 | Tratando dados para montar tabela)
    setProdutos(produtosLista)
  }

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log('teste', produtos)
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
=======
>>>>>>> b6b34a9 (🚧 #S4U-24 | Tratando dados para montar tabela)
    getDadosFirebase()
  }, [])

  const handleChange = selectedOption => {
<<<<<<< HEAD
<<<<<<< HEAD
    setProduto(selectedOption.value)
    produtos.find(function (post, index) {
      if (post.nome == selectedOption.value) {
        setPreencheInputUnidade(post)
=======
=======
    setProduto(selectedOption.value)
>>>>>>> b6b34a9 (🚧 #S4U-24 | Tratando dados para montar tabela)
    produtos.find(function (post, index) {
      if (post.nome == selectedOption.value) {
        setPreencheInputUnidade(post)
        console.log(preencheInputUnidade)
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
      }
    })
  }

<<<<<<< HEAD
<<<<<<< HEAD
  const adicionarProduto = () => {
    setProdutoLista([
      ...produtoLista,
      {
        nome: produto,
        medida: preencheInputUnidade?.medida,
        quantidade: quantidade
      }
    ])
  }
  useEffect(() => {
    console.log(produtoLista)
  }, [produtoLista])

  const criarLista = () => {
    try {
      const listaRef = database.ref('listaPadrao')
      listaRef.push({ nome: title, produtos: produtoLista })
      toast.success('Lista adicionada com sucesso', {
        icon: '🚀',
        theme: 'colored'
      })
      setLista([])
      setProdutoLista([])
      setTitle('')
      setQuantidade('')
      console.log(lista)
    } catch (e) {
      toast.error('Erro ao adicionar lista, tente novamente!', {
        theme: 'colored'
      })
    }
  }

  const voltar = () => {
    history.goBack()
  }

  return (
    <App>
      <ToastContainer />

=======
=======
  const teste = () => {
    produtoLista.push({
      nome: produto,
      medida: preencheInputUnidade?.medida,
      quantidade: quantidade
    })

    lista.push({
      nome: title,
      produtos: produtoLista
    })

    setLista(lista)
  }
  useEffect(() => {
    console.log(
      '🚀 ~ file: index.tsx ~ line 90 ~ teste ~ produtoLista',
      produtoLista
    )
    console.log(lista)
  }, [lista])

>>>>>>> b6b34a9 (🚧 #S4U-24 | Tratando dados para montar tabela)
  return (
    <App>
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
      <P.Container>
        <P.ContainerAcoes>
          <P.Titulo>Nova Lista Padrão</P.Titulo>
          <P.NomeLista>
            <InputGroup size="lg">
              <InputGroup.Text>Nome da lista</InputGroup.Text>
              <FormControl
                aria-label="First name"
                onChange={event => setTitle(event.target.value)}
<<<<<<< HEAD
                value={title}
=======
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
              />
            </InputGroup>
          </P.NomeLista>
          <P.BotaoAdicionar>
            <M.Button
              size="medium"
              variant="contained"
              color="primary"
              className={classes.root}
<<<<<<< HEAD
<<<<<<< HEAD
              onClick={criarLista}
              disabled={!title}
            >
              Salvar lista
            </M.Button>
            <M.Button
              size="medium"
              variant="contained"
              color="primary"
              className={classes.voltar}
              onClick={voltar}
            >
              Voltar
            </M.Button>
=======
=======
              onClick={teste}
>>>>>>> b6b34a9 (🚧 #S4U-24 | Tratando dados para montar tabela)
            >
              Salvar lista
            </M.Button>
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
          </P.BotaoAdicionar>
        </P.ContainerAcoes>
        <P.ContainerProdutos>
          <P.DivProdutos>
            <Select
              options={options}
              value={selectedOption}
              onChange={handleChange}
<<<<<<< HEAD
              classNamePrefix="mySelect"
=======
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
            />
          </P.DivProdutos>
          <P.DivProdutos>
            <InputGroup size="lg">
              <InputGroup.Text>Quantidade</InputGroup.Text>
              <FormControl
                aria-label="First name"
<<<<<<< HEAD
<<<<<<< HEAD
                onChange={event => setQuantidade(event.target.value)}
                value={quantidade}
=======
                onChange={event => setTitle(event.target.value)}
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
=======
                onChange={event => setQuantidade(event.target.value)}
>>>>>>> b6b34a9 (🚧 #S4U-24 | Tratando dados para montar tabela)
              />
            </InputGroup>
          </P.DivProdutos>
          <P.DivProdutos>
            <InputGroup size="lg">
              <InputGroup.Text>Unidade/Medida</InputGroup.Text>
              <FormControl
                value={preencheInputUnidade?.medida}
                aria-label="First name"
<<<<<<< HEAD
<<<<<<< HEAD
                onChange={event => setMedida(preencheInputUnidade?.medida)}
=======
                onChange={event => setTitle(event.target.value)}
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
=======
                onChange={event => setMedida(preencheInputUnidade?.medida)}
>>>>>>> b6b34a9 (🚧 #S4U-24 | Tratando dados para montar tabela)
                readOnly
              />
            </InputGroup>
          </P.DivProdutos>
          <P.DivProdutosBotao>
<<<<<<< HEAD
<<<<<<< HEAD
            <Button variant="primary" size="lg" onClick={adicionarProduto}>
=======
            <Button variant="primary" size="lg">
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
=======
            <Button variant="primary" size="lg" onClick={teste}>
>>>>>>> b6b34a9 (🚧 #S4U-24 | Tratando dados para montar tabela)
              Adicionar
            </Button>
          </P.DivProdutosBotao>
        </P.ContainerProdutos>
<<<<<<< HEAD
        <P.ContainerTabela>
          <Tabela
            dados={produtoLista}
            cabecalho={['Nome', 'Quantidade', 'Unidade - Medida']}
          />
        </P.ContainerTabela>
=======
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
      </P.Container>
    </App>
  )
}

export default NovaListaPadrao
