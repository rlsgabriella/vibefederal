import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TrilhaCard from './TrilhaCard.jsx';
import './TrilhasCarousel.css';

const DRAG_THRESHOLD = 6;

export default function TrilhasCarousel({ trilhas }) {
  const trackRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [dragging, setDragging] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows, trilhas.length]);

  const scrollByStep = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector('.trilhas-carousel__slide');
    const step = slide ? slide.offsetWidth + 24 : 320;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  const onPointerDown = (e) => {
    if (e.button !== 0) return;
    const el = trackRef.current;
    if (!el) return;
    dragRef.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
      moved: false,
    };
    setDragging(true);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragRef.current.active) return;
    const el = trackRef.current;
    if (!el) return;
    const dx = e.clientX - dragRef.current.startX;
    if (Math.abs(dx) > DRAG_THRESHOLD) dragRef.current.moved = true;
    el.scrollLeft = dragRef.current.scrollLeft - dx;
  };

  const endDrag = (e) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    setDragging(false);
    trackRef.current?.releasePointerCapture(e.pointerId);
    updateArrows();
  };

  const blockClickIfDragged = (e) => {
    if (dragRef.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragRef.current.moved = false;
    }
  };

  return (
    <div className="trilhas-carousel">
      <button
        type="button"
        className="trilhas-carousel__nav trilhas-carousel__nav--prev"
        onClick={() => scrollByStep(-1)}
        disabled={!canPrev}
        aria-label="Trilha anterior"
      >
        <ChevronLeft size={22} />
      </button>

      <div
        ref={trackRef}
        className={`trilhas-carousel__track${dragging ? ' trilhas-carousel__track--dragging' : ''}`}
        role="region"
        aria-label="Carrossel de trilhas"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={(e) => {
          if (dragRef.current.active) endDrag(e);
        }}
        onClickCapture={blockClickIfDragged}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByStep(-1); }
          if (e.key === 'ArrowRight') { e.preventDefault(); scrollByStep(+1); }
        }}
      >
        {trilhas.map((t, i) => (
          <div key={t.id} className="trilhas-carousel__slide">
            <TrilhaCard trilha={t} delay={i * 80} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="trilhas-carousel__nav trilhas-carousel__nav--next"
        onClick={() => scrollByStep(1)}
        disabled={!canNext}
        aria-label="Próxima trilha"
      >
        <ChevronRight size={22} />
      </button>

      <p className="trilhas-carousel__hint" aria-hidden="true">
        Arraste para o lado ou use as setas
      </p>
    </div>
  );
}
