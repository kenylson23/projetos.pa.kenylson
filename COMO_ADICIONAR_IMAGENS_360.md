# Como Adicionar Suas Imagens 360° do Spa

## Passo a Passo Completo

### 1. Prepare suas fotos 360°
**Requisitos técnicos:**
- Formato: Equiretangular (proporção 2:1)
- Resolução mínima: 2048x1024 pixels
- Resolução recomendada: 4096x2048 pixels
- Formatos aceitos: JPG, PNG
- Tamanho máximo: 10MB por imagem

### 2. Como tirar fotos 360°
**Opções disponíveis:**
- **Câmera 360°**: Insta360, Ricoh Theta, Samsung Gear 360
- **Aplicativo móvel**: Google Street View (gratuito)
- **Aplicativo profissional**: Kuula, Pano2VR

### 3. Coloque suas imagens na pasta correta
Copie suas fotos para: `client/public/images/360-tour/`

**Nomes sugeridos:**
- `recepcao-360.jpg` - Para a recepção
- `sala-tratamento-360.jpg` - Para salas de tratamento
- `area-relaxamento-360.jpg` - Para área de relaxamento
- `sala-meditacao-360.jpg` - Para sala de meditação

### 4. Onde editar o código
Abra o arquivo: `client/src/components/virtual-tour-section.tsx`

**Substitua as linhas panorama:**
```javascript
// ANTES (exemplo atual):
panorama: "/images/360-tour/recepcao-360.jpg",

// DEPOIS (com sua imagem):
panorama: "/images/360-tour/sua-recepcao.jpg",
```

### 5. Também atualize as imagens de preview
Para as imagens pequenas que aparecem antes de abrir o tour 360°:
```javascript
// Substitua também estas linhas:
preview: "/images/360-tour/preview-recepcao.jpg",
```

### 6. Teste o resultado
Após adicionar suas imagens:
1. Salve o arquivo
2. O site atualiza automaticamente
3. Vá para a seção "Tour Virtual 360°"
4. Clique em qualquer área para testar

## Personalização Adicional

### Hotspots (Pontos Informativos)
Você pode ajustar os pontos informativos editando:
```javascript
hotspots: [
  { 
    pitch: -2,    // Altura do ponto (-90 a 90)
    yaw: 15,      // Posição horizontal (0 a 360)
    type: "info", 
    text: "Nome do Ponto", 
    info: "Descrição que aparece ao clicar" 
  }
]
```

### Nomes das Áreas
Para mudar os nomes das áreas, edite:
```javascript
name: "Seu Nome Personalizado",
```

## Solução de Problemas

**Imagem não aparece?**
- Verifique se o caminho está correto
- Confirme que a imagem está na pasta `client/public/images/360-tour/`
- Teste se a imagem abre normalmente no navegador

**Tour 360° não funciona?**
- Verifique se a imagem está no formato equiretangular
- Confirme se o arquivo não está corrompido
- Teste com uma imagem menor primeiro

**Qualidade ruim?**
- Use resolução maior (4096x2048 ou superior)
- Comprima a imagem mantendo qualidade alta
- Evite JPEG com muita compressão