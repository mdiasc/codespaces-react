import imagem_rds from'../../../imagens/RDS.svg'
import imagem_lambda from '../../../imagens/lambda.svg'
import imagem_iam from'../../../imagens/IAM.svg'
import imagem_cloudfront from'../../../imagens/cloudfront.svg'

export const servicos = [
    { 
        id:1,
        título:"RDS",
        oqueFaz:" Relacional Database Service",
        userGuide:" Descreve todos os conceitos de Amazon RDS e traz instrução de como usar ambos com console e linha de comando da interface",
        bestPractices:"Arquitetura Central",
        imagemCartao: imagem_rds
    
    },
    { 
        id:2,
        título:"Lambda",
        oqueFaz:"Computer service to developers",
        userGuide:"Permite que desenvolvedores executem códigos sem provisonamento ou gerenciamento de servidores",
        bestPractices:"Construa soluções com tecnologia sem servidor",
        imagemCartao: imagem_lambda
    
    },
    { 
        id:3,
        título:"IAM",
        oqueFaz:" AWS Identity and Access Management",
        userGuide:"Serviço da web que ajuda você a controlar os recursos da AWS de forma segura",
        bestPractices:"Sem custo Adicional",
        imagemCartao: imagem_iam
    },
    { 
        id:4,
        título:"CDN",
        oqueFaz:" Content Delivery Network",
        userGuide:"Rede de entrega de conteúdo que acelera a entrega do conteúdo estático e dinâmico da Web para usuários finais",
        bestPractices:"Crie uma distribuição",
        imagemCartao: imagem_cloudfront
    
    },
]