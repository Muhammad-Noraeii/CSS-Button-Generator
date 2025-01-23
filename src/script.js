
        const bgColorInput = document.getElementById('bg-color');
        const useGradientInput = document.getElementById('use-gradient');
        const gradientStartInput = document.getElementById('gradient-start');
        const gradientEndInput = document.getElementById('gradient-end');
        const textColorInput = document.getElementById('text-color');
        const borderRadiusInput = document.getElementById('border-radius');
        const fontSizeInput = document.getElementById('font-size');
        const fontFamilyInput = document.getElementById('font-family');
        const paddingInput = document.getElementById('padding');
        const borderWidthInput = document.getElementById('border-width');
        const borderColorInput = document.getElementById('border-color');
        const useTextShadowInput = document.getElementById('use-text-shadow');
        const textShadowColorInput = document.getElementById('text-shadow-color');
        const textShadowBlurInput = document.getElementById('text-shadow-blur');
        const hoverScaleInput = document.getElementById('hover-scale');
        const scaleValueInput = document.getElementById('scale-value');
        const hoverOpacityInput = document.getElementById('hover-opacity');
        const opacityValueInput = document.getElementById('opacity-value');
        const hoverShadowInput = document.getElementById('hover-shadow');
        const shadowColorInput = document.getElementById('shadow-color');
        const shadowSizeInput = document.getElementById('shadow-size');
        const hoverRotateInput = document.getElementById('hover-rotate');
        const rotateAngleInput = document.getElementById('rotate-angle');
        const gradientOptions = document.getElementById('gradient-options');
        const textShadowOptions = document.getElementById('text-shadow-options');
        const scaleOptions = document.getElementById('scale-options');
        const opacityOptions = document.getElementById('opacity-options');
        const shadowOptions = document.getElementById('shadow-options');
        const rotateOptions = document.getElementById('rotate-options');
        const previewButton = document.querySelector('.preview-button');
        const cssOutput = document.getElementById('css-output');

        useGradientInput.addEventListener('change', () => {
            gradientOptions.style.display = useGradientInput.checked ? 'block' : 'none';
            updateButtonStyle();
        });

        useTextShadowInput.addEventListener('change', () => {
            textShadowOptions.style.display = useTextShadowInput.checked ? 'block' : 'none';
            updateButtonStyle();
        });

        hoverScaleInput.addEventListener('change', () => {
            scaleOptions.style.display = hoverScaleInput.checked ? 'block' : 'none';
            updateButtonStyle();
        });

        hoverOpacityInput.addEventListener('change', () => {
            opacityOptions.style.display = hoverOpacityInput.checked ? 'block' : 'none';
            updateButtonStyle();
        });

        hoverShadowInput.addEventListener('change', () => {
            shadowOptions.style.display = hoverShadowInput.checked ? 'block' : 'none';
            updateButtonStyle();
        });

        hoverRotateInput.addEventListener('change', () => {
            rotateOptions.style.display = hoverRotateInput.checked ? 'block' : 'none';
            updateButtonStyle();
        });

        function updateFontFamily(fontName) {
            const fontLink = document.createElement('link');
            fontLink.rel = 'stylesheet';
            fontLink.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}&display=swap`;
            document.head.appendChild(fontLink);
        }

        function updateButtonStyle() {
            const bgColor = bgColorInput.value;
            const gradientStart = gradientStartInput.value;
            const gradientEnd = gradientEndInput.value;
            const textColor = textColorInput.value;
            const borderRadius = borderRadiusInput.value + 'px';
            const fontSize = fontSizeInput.value + 'px';
            const fontFamily = fontFamilyInput.value;
            const padding = paddingInput.value + 'px';
            const borderWidth = borderWidthInput.value + 'px';
            const borderColor = borderColorInput.value;
            const textShadowColor = textShadowColorInput.value;
            const textShadowBlur = textShadowBlurInput.value + 'px';
            const shadowColor = shadowColorInput.value;
            const shadowSize = shadowSizeInput.value + 'px';
            const scaleValue = scaleValueInput.value;
            const opacityValue = opacityValueInput.value;
            const rotateAngle = rotateAngleInput.value;

            if (fontFamily) {
                updateFontFamily(fontFamily);
                previewButton.style.fontFamily = `'${fontFamily}', sans-serif`;
            }

            if (useGradientInput.checked) {
                previewButton.style.backgroundImage = `linear-gradient(${gradientStart}, ${gradientEnd})`;
            } else {
                previewButton.style.backgroundImage = '';
                previewButton.style.backgroundColor = bgColor;
            }

            previewButton.style.color = textColor;
            previewButton.style.borderRadius = borderRadius;
            previewButton.style.fontSize = fontSize;
            previewButton.style.padding = padding;
            previewButton.style.border = `${borderWidth} solid ${borderColor}`;

            if (useTextShadowInput.checked) {
                previewButton.style.textShadow = `0 0 ${textShadowBlur} ${textShadowColor}`;
            } else {
                previewButton.style.textShadow = '';
            }

            let hoverStyles = '';
            if (hoverScaleInput.checked) {
                hoverStyles += `transform: scale(${scaleValue});`;
            }
            if (hoverOpacityInput.checked) {
                hoverStyles += `opacity: ${opacityValue};`;
            }
            if (hoverShadowInput.checked) {
                hoverStyles += `box-shadow: 0 0 calc(${shadowSize} * 2) ${shadowColor};`;
            }
            if (hoverRotateInput.checked) {
                hoverStyles += `transform: rotate(${rotateAngle}deg);`;
            }

            previewButton.onmouseover = () => {
                previewButton.style.cssText += hoverStyles;
            };
            previewButton.onmouseout = () => {
                previewButton.style.cssText = `
                    ${useGradientInput.checked ? `background-image: linear-gradient(${gradientStart}, ${gradientEnd});` : `background-color: ${bgColor};`}
                    color: ${textColor};
                    border-radius: ${borderRadius};
                    font-size: ${fontSize};
                    padding: ${padding};
                    border: ${borderWidth} solid ${borderColor};
                    ${useTextShadowInput.checked ? `text-shadow: 0 0 ${textShadowBlur} ${textShadowColor};` : ''}
                    font-family: '${fontFamily}', sans-serif;
                `;
            };

            cssOutput.value = `button {
    ${useGradientInput.checked ? `background-image: linear-gradient(${gradientStart}, ${gradientEnd});` : `background-color: ${bgColor};`}
    color: ${textColor};
    border-radius: ${borderRadius};
    font-size: ${fontSize};
    padding: ${padding};
    border: ${borderWidth} solid ${borderColor};
    ${useTextShadowInput.checked ? `text-shadow: 0 0 ${textShadowBlur} ${textShadowColor};` : ''}
    font-family: '${fontFamily}', sans-serif;
}

button:hover {
    ${hoverScaleInput.checked ? `transform: scale(${scaleValue});` : ''}
    ${hoverOpacityInput.checked ? `opacity: ${opacityValue};` : ''}
    ${hoverShadowInput.checked ? `box-shadow: 0 0 calc(${shadowSize} * 2) ${shadowColor};` : ''}
    ${hoverRotateInput.checked ? `transform: rotate(${rotateAngle}deg);` : ''}
}`;
        }

        bgColorInput.addEventListener('input', updateButtonStyle);
        gradientStartInput.addEventListener('input', updateButtonStyle);
        gradientEndInput.addEventListener('input', updateButtonStyle);
        textColorInput.addEventListener('input', updateButtonStyle);
        borderRadiusInput.addEventListener('input', updateButtonStyle);
        fontSizeInput.addEventListener('input', updateButtonStyle);
        fontFamilyInput.addEventListener('input', updateButtonStyle);
        paddingInput.addEventListener('input', updateButtonStyle);
        borderWidthInput.addEventListener('input', updateButtonStyle);
        borderColorInput.addEventListener('input', updateButtonStyle);
        textShadowColorInput.addEventListener('input', updateButtonStyle);
        textShadowBlurInput.addEventListener('input', updateButtonStyle);
        scaleValueInput.addEventListener('input', updateButtonStyle);
        opacityValueInput.addEventListener('input', updateButtonStyle);
        shadowColorInput.addEventListener('input', updateButtonStyle);
        shadowSizeInput.addEventListener('input', updateButtonStyle);
        rotateAngleInput.addEventListener('input', updateButtonStyle);

        updateButtonStyle();
