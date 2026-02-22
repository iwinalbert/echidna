import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import SEO from '../components/SEO';
import '../styles/Customize.css';

// Price map per product (fake but realistic)
const prices = {
    1: { base: 349, label: 'per mug' },
    2: { base: 799, label: 'per shirt' },
    3: { base: 1199, label: 'per sweatshirt' },
    4: { base: 1399, label: 'per hoodie' },
    5: { base: 499, label: 'per pillow' },
    6: { base: 649, label: 'per pillow' },
    7: { base: 549, label: 'per pad' },
    8: { base: 299, label: 'per card (min 10)' },
    9: { base: 149, label: 'per keychain' },
    10: { base: 699, label: 'per wallet' },
};

// Resize an image File to a max dimension and return base64 JPEG (for email embedding)
const resizeImageToBase64 = (file, maxPx = 400) =>
    new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const scale = Math.min(1, maxPx / Math.max(img.width, img.height));
                const canvas = document.createElement('canvas');
                canvas.width = Math.round(img.width * scale);
                canvas.height = Math.round(img.height * scale);
                canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg', 0.75));
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });

const Customize = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));
    const { addToCart } = useCart();

    const [selectedSize, setSelectedSize] = useState(null);
    const [customText, setCustomText] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploadedUrl, setUploadedUrl] = useState(null);           // full blob URL — for on-page preview
    const [uploadedThumbnail, setUploadedThumbnail] = useState(null); // base64 — for email
    const [uploadError, setUploadError] = useState(null);
    const [toastVisible, setToastVisible] = useState(false);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // 5MB cap — keeps email size reasonable
        const MAX_BYTES = 5 * 1024 * 1024;
        if (file.size > MAX_BYTES) {
            setUploadError('File too large. Please upload an image under 5MB.');
            return;
        }
        setUploadError(null);

        if (uploadedUrl) URL.revokeObjectURL(uploadedUrl);
        setUploadedFile(file);
        setUploadedUrl(URL.createObjectURL(file));
        // generate small thumbnail in background for email
        const thumb = await resizeImageToBase64(file, 400);
        setUploadedThumbnail(thumb);
    };

    const handleAddToCart = () => {
        addToCart(product, {
            selectedSize,
            qty: 1,
            uploadedImage: uploadedUrl,
            uploadedThumbnail,          // base64 thumbnail for email
            customText,
        });
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 2800);
    };

    if (!product) {
        return (
            <div className="customize-page">
                <div className="cz-orbs" aria-hidden="true">
                    <div className="cz-orb cz-orb-1" /><div className="cz-orb cz-orb-2" />
                </div>
                <div className="cz-not-found">
                    <h2>Product not found</h2>
                    <p>We couldn't find that product.</p>
                    <Link to="/products" className="cz-back" style={{ marginTop: 8 }}>← Back to Products</Link>
                </div>
            </div>
        );
    }

    const sizesSpec = product.specs.find((s) => s.isChips);
    const sizes = sizesSpec ? sizesSpec.value : null;
    const priceInfo = prices[product.id] || { base: 499, label: 'per item' };

    return (
        <div className="customize-page">
            <SEO
                title={`Customize ${product.name}`}
                description={`Design your own ${product.name} with Echidna.in's online sublimation print studio.`}
            />



            {/* Body */}
            <div className="cz-body" style={{ paddingTop: '100px' }}>

                {/* Left — Preview */}
                <div className="cz-preview">
                    <div className="cz-art-wrap cz-art-relative">
                        <div dangerouslySetInnerHTML={{ __html: product.art }} className="cz-art-svg" />
                        {/* Uploaded design overlay */}
                        {uploadedUrl && (
                            <div className="cz-uploaded-overlay">
                                <img src={uploadedUrl} alt="Your design" className="cz-uploaded-img" />
                                <span className="cz-uploaded-label">Your Design</span>
                            </div>
                        )}
                    </div>
                    <span className="cz-product-tag">{product.tag}</span>
                    <h1 className="cz-product-name">{product.name}</h1>
                    <div className="cz-price">
                        <span className="cz-price-label">Starting from</span>
                        ₹{priceInfo.base}
                        <span className="cz-price-label">{priceInfo.label}</span>
                    </div>
                </div>

                {/* Right — Config */}
                <div className="cz-config">

                    {/* Specs */}
                    <div>
                        <p className="cz-section-label">Product Details</p>
                        <div className="cz-specs">
                            {product.specs.filter((s) => !s.isChips).map((spec, i) => (
                                <div key={i} className="cz-spec-row">
                                    <span className="cz-spec-key">{spec.label}</span>
                                    <span className="cz-spec-val">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Size / style picker */}
                    {sizes && (
                        <div>
                            <p className="cz-section-label">{sizesSpec.label}</p>
                            <div className="cz-sizes">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`cz-size-btn${selectedSize === size ? ' selected' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Custom text */}
                    <div>
                        <p className="cz-section-label">Custom Text (optional)</p>
                        <textarea
                            className="cz-input"
                            rows={3}
                            placeholder="Add a name, quote, or message to print…"
                            value={customText}
                            onChange={(e) => setCustomText(e.target.value)}
                        />
                    </div>

                    {/* Upload artwork */}
                    <div>
                        <p className="cz-section-label">Upload Your Artwork (optional)</p>
                        <label className="cz-upload">
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            {uploadedUrl ? (
                                <div className="cz-upload-preview">
                                    <img src={uploadedUrl} alt="Uploaded artwork" className="cz-upload-thumb" />
                                    <div className="cz-upload-preview-info">
                                        <strong className="cz-upload-fname">{uploadedFile?.name}</strong>
                                        <span className="cz-upload-change">Click to change</span>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="cz-upload-icon">🖼️</div>
                                    <p className="cz-upload-text">
                                        <strong>Click to upload</strong> or drag &amp; drop<br />
                                        PNG, JPG, SVG — min 300 dpi recommended
                                    </p>
                                </>
                            )}
                        </label>
                        {uploadError && (
                            <p style={{ color: '#f87171', fontSize: 12, marginTop: 8 }}>⚠ {uploadError}</p>
                        )}
                    </div>

                    {/* CTAs */}
                    <div className="cz-actions">
                        <button className="cz-cart-btn" onClick={handleAddToCart}>
                            🛒 Add to Cart
                        </button>
                        <button className="cz-quote-btn">
                            Request a Custom Quote
                        </button>
                    </div>
                </div>
            </div>

            {/* Toast */}
            <div className={`cz-toast${toastVisible ? ' show' : ''}`}>
                <span className="cz-toast-icon">✅</span>
                Added <strong>{product.name}</strong> to cart!
            </div>
        </div>
    );
};

export default Customize;
