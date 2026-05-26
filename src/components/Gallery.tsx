import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Tipos para os itens da galeria
type GalleryItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
};

// Dados da galeria - você pode substituir por suas próprias imagens
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'eTrilhas',
    description: 'Empresa voltada à geração de dados para estruturação de turismo sustentável',
    imageUrl: '/placeholder-mobcontent.jpg', // Substitua pelo caminho da sua imagem
    category: 'sustentabilidade'
  },
  {
    id: 2,
    title: 'mobCONTENT',
    description: 'Empresa voltada a interatividade e cultura',
    imageUrl: '/placeholder-mobcontent.jpg', // Substitua pelo caminho da sua imagem
    category: 'tecnologia'
  },
  {
    id: 3,
    title: 'Coleta de Lixo em Montanhas',
    description: 'App de mobilização de coleta de lixo em montanhas para AccesoPanam (EUA)',
    imageUrl: '/placeholder-mobcontent.jpg', // Substitua pelo caminho da sua imagem
    category: 'sustentabilidade'
  },
  {
    id: 4,
    title: 'Museu da Língua Portuguesa',
    description: 'Produção audiovisual e licenciamento de conteúdo para a linha do tempo – Fundação Roberto Marinho',
    imageUrl: '/placeholder-mobcontent.jpg', // Substitua pelo caminho da sua imagem
    category: 'cultura'
  },
  {
    id: 5,
    title: 'Experiência Internacional',
    description: 'Vivência internacional no Reino Unido, EUA, França, Espanha, Argentina entre outros',
    imageUrl: '/placeholder-mobcontent.jpg', // Substitua pelo caminho da sua imagem
    category: 'experiência'
  },
  {
    id: 6,
    title: 'British Council`s Young Creative Entrepreneur',
    description: 'Representante brasileiro em imersão em economia criativa em Londres, Reino Unido',
    imageUrl: '/placeholder-mobcontent.jpg', // Substitua pelo caminho da sua imagem
    category: 'reconhecimento'
  }
];

// Categorias únicas para os filtros
const categories = ['todos', ...new Set(galleryItems.map(item => item.category))];

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Filtrar itens com base na categoria selecionada
  const filteredItems = selectedCategory === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Portfólio</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos e realizações ao longo da minha carreira
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80 text-foreground'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid de itens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-card"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-muted/20">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-primary/80 rounded-full">
                    Ver detalhes
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de visualização */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                className="relative bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  onClick={() => setSelectedItem(null)}
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="grid md:grid-cols-2 gap-8 p-6">
                  <div className="aspect-square bg-muted/20 rounded-lg overflow-hidden">
                    <img
                      src={selectedItem.imageUrl}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{selectedItem.title}</h2>
                    <p className="text-muted-foreground mb-6">{selectedItem.description}</p>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="px-3 py-1 bg-muted text-xs font-medium rounded-full">
                        {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
                      </span>
                    </div>
                    <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                      Ver Projeto
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
