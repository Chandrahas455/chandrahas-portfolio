
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery?: string[];
  tools: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const images = project.gallery || [project.image];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="relative">
            {images.length > 1 ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="w-full overflow-hidden rounded-lg flex justify-center">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="max-w-full max-h-[60vh] object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            ) : (
              <div className="w-full overflow-hidden rounded-lg flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-[60vh] object-contain"
                />
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {images.length > 1 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Gallery</h3>
                <p className="text-gray-600 text-sm">
                  {images.length} images • Use the arrows to navigate through the gallery
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
