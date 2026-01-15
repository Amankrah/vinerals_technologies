import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  href: string;
  badge?: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  href,
  badge,
  className,
}) => {
  return (
    <article
      className={cn(
        'group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300',
        className
      )}
    >
      {badge && (
        <span className="absolute top-4 right-4 bg-accent-500 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
          {badge}
        </span>
      )}
      <div className="mb-4 text-primary-700">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="text-secondary-600 mr-2">→</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-primary-700 font-medium hover:gap-3 transition-all"
        title={`Learn more about ${title}`}
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </article>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  icon,
  className,
}) => {
  return (
    <div className={cn('text-center', className)}>
      {icon && <div className="mb-3 flex justify-center text-secondary-600">{icon}</div>}
      <div className="text-4xl md:text-5xl font-bold text-primary-900 mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold text-gray-700 mb-1">{label}</div>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
  rating?: number;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  rating,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl p-8 shadow-md',
        className
      )}
    >
      {rating && (
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={cn(
                'w-5 h-5',
                i < rating ? 'text-accent-500' : 'text-gray-300'
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}
      <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4">
        {author.avatar ? (
          <Image
            src={author.avatar}
            alt={author.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-primary-700 font-semibold text-lg">
              {author.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <div className="font-semibold text-gray-900">{author.name}</div>
          <div className="text-sm text-gray-600">
            {author.title}, {author.company}
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn('text-center md:text-left', className)}>
      <div className="mb-4 flex justify-center md:justify-start text-primary-700">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
