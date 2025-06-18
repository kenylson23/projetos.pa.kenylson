# Como Adicionar Suas Imagens 360° do Spa

## Formatos Suportados
- **Formato requerido**: Equiretangular (proporção 2:1)
- **Resolução recomendada**: 4096x2048 pixels ou superior
- **Formatos**: JPG, PNG
- **Tamanho máximo**: 10MB por imagem

## Passos para Adicionar Suas Fotos:

### 1. Prepare suas imagens 360°
- Certifique-se que as fotos estão no formato equiretangular
- Renomeie os arquivos para nomes descritivos:
  - `recepcao-360.jpg`
  - `sala-tratamento-360.jpg`
  - `area-relaxamento-360.jpg`
  - `sala-meditacao-360.jpg`

### 2. Coloque as imagens nesta pasta
Copie suas imagens 360° para a pasta: `client/public/images/360-tour/`

### 3. Atualize o código
No arquivo `client/src/components/virtual-tour-section.tsx`, substitua os URLs:

```javascript
panorama: "/images/360-tour/recepcao-360.jpg"
```

## Dicas para Fotos 360°:
- Use uma câmera 360° ou aplicativo móvel como Google Street View
- Certifique-se que a iluminação está uniforme
- Evite movimento durante a captura
- Teste a qualidade antes de usar no site